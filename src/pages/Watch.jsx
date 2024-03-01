import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removedHistoryAPI } from '../services/allAPI'


function Watch() {

  const [history, setHistory] = useState([]);
  const getAllHistory = async() => {
    const result = await getHistoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }

  useEffect(() =>{
    getAllHistory()
  },[])

  const deleteHistory = async (vId) => {
    //api call
    await removedHistoryAPI(vId)
    getAllHistory()
  }
  console.log(history)

  return (
    <div className="contaner mt-5 mb-5">
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>
          Back to<i className="fa-solid fa-home"></i>
        </Link>
      </div>
      <table className='table mt-5 mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>video link</th>
            <th>Time stamp</th>
            <th>
              <i className='fa-solid fa-ellipsis-vertical'></i>
            </th>
          </tr>
        </thead>
        <tbody>
          { history?.length>0? history?.map((video,index) =>(
            <tr key = {index}>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.youtubelink} target='_blank'>{video?.youtubelink}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button onClick={() => deleteHistory(video.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
          ))
          :
          <tr className='text-danger fw-bolder'>Your watch history is empty!!!</tr>
        }
        </tbody>
      </table>
    </div>
  )
}

export default Watch