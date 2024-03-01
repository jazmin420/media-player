import React, { useState } from 'react'
import { Card, Modal} from 'react-bootstrap'
import { removeVideoAPI, savedHistory } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>
  { 
    setShow(true);
  //get video details
  const {caption, youtubelink} = displayData
  let timedata = new Date()
  let timeStamp = new Intl.DateTimeFormat('en-us',{
    year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'
  }).format(timedata)
  console.log(timeStamp);
  await savedHistory({caption,youtubelink,timeStamp})
  }

    //removing video
    const deleteVideo = async (vId) => {
      //api call
      const result = await removeVideoAPI(vId)
      setDeleteVideoResponse(result.data)
    }

    // dragstarted
    const dragStarted = (e,vId) =>{
      console.log(`Dragging started with video id : ${vId}`);
      e.dataTransfer.setData("videoId", vId)
    }

  return (
    <>
    <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow' >
      <Card.Img style={{cursor: 'pointer'}} onClick={handleShow} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {!insideCategory && <button onClick={()=> deleteVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayData?.youtubelink}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard