import React,{useState}from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVidoeAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubelink:""
  })
  // console.log(uploadVideo)

  const [show, setShow] = useState(false);

  const handleClose = () => {
  setShow(false);
  setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeink:""})
  }
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (link)=>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,youtubelink:`https://www.youtube.com/embed/${videoId}`})
    }else {
      setUploadVideo({...uploadVideo,youtubelink:""})
      alert("input proper youtube link!!")
    }
  }
  
  const handleUpload = async ()=> {
    // store upload videos in http://localhost:3000/videos
    const {caption,imageURL,youtubelink} = uploadVideo
    if(caption && imageURL && youtubelink){
      //proceed to store video
      // alert("proceed to store video") from http://localhost:5173/home to http://localhost:3000/videos
      const result = await uploadVidoeAPI(uploadVideo)
      console.log(result);
      if(result.status >= 200 && result.status<300){
        alert(`video ${result.data.caption} uploaded successfully`)
        setUploadVideoResponse(result.data)
        handleClose()
      }else {
        alert("api call failed....please try after some time")
      }
    }else {
      alert("please fill the form completely!!!")
    }
  }

  return (
    <>
    <div className="d-flex align-items-center">
      <h4>Upload A Video</h4>
      <button onClick={handleShow} className='btn bg-secondary ms-2 '><i className="fa-solid fa-plus"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form!!!!</p>
        <div className='border rounded border-secondary p-3'>
          <FloatingLabel
          controlId="floatingInput"
          label="Video caption"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video caption" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="image url"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.imageURL} onChange={e => setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="image url" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="youtube link"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.youtubelink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="youtube link" />
        </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add