import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getWatchHistory } from '../services/allAPI';


function WatchHistory() {
  const [allHistory, setAllHistory] = useState([])
  const getAllWatchedHistory = async()=>{
    const response = await getWatchHistory();
    const {data} = response;
    console.log("==watch history===");
    setAllHistory(data)
  }
  useEffect(()=>{
    getAllWatchedHistory();
  },[])
  const handleDelete = async(id)=>{
    await deleteWatchHistory(id)
    getAllWatchedHistory();
  }
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <h5>Watch History</h5>
      <Link to='/home' style={{textDecoration:"none", color:"white", fontSize:"15px"}}>
      <i class="fa-solid fa-arrow-left me-2"></i> Back to Home 
      </Link>
    </div>

    <table className='table container mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allHistory.length>0?
          allHistory.map((item,index)=>(         
          <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td>{item.embededLink}</td>
            <td>{item.timestamp}</td>
            <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button></td>
          
          </tr>
          ))
          :
          <p>No watch history found</p>
        }
       
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory