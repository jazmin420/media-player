import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'

 
function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {

  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")

  const getAllVideos = async () =>{
    const result = await getAllVideoAPI()
    //console.log(result);
    if(result?.status ===200){
      setAllVideos(result?.data);
    }
   }
      useEffect(() => {
        getAllVideos()
      },[uploadVideoResponse, deleteVideoResponse])

      //console.log(allVideos);

      const dragOverView = (e)=>{
        e.preventDefault()
      }
      const handlecategoryVideo = async (e) =>{
        const {videoId, categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDEtails"))
        console.log(`remove video id: ${videoId} from category id: ${categoryId}`
        )

        // get a category
        const {data} = await getSingleCategoryAPI(categoryId)
        const updateVideoList = data.allVideos.filter(item => item.id!=videoId)
        console.log(updateVideoList);

        const {id, categoryName} = data
        const result =  await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updateVideoList})
        setRemoveCategoryVideoResponse(result.data)
      }

  return (
    <>
    <Row draggable="true" onDragOver={e=> dragOverView(e)} onDrop={e=>handlecategoryVideo(e)}>
      { allVideos?.length>0? allVideos?.map((video,index) => (
        <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
        <VideoCard setDeleteVideoResponse ={setDeleteVideoResponse} displayData={video}/>
      </Col>
      ))
    :
    <div className='text-danger fw-bolder'>no videos are uploaded yet!!</div>
     }
    </Row>
    </>
  )
    }
export default View