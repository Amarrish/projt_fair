import React from 'react'
import Addprojects from '../Components/Addprojects'
const Myprojects = () => {
  return (
    <>
        <div className='card shadow p-3 m-2' style={{backgroundColor:'#c5def0'}}>
        <div className='d-flex justify-content-between'>
        <h4>My Projects</h4>
        <div className='ms-auto'><Addprojects/></div>
        </div>
        
        <div className='mt-4'>
            
          <div className="border d-flex align-items-center rounded-p-2">
            <h4>Project Title</h4>
            <div className='icons ms-auto'>
                <button className='btn'><i  class="fa-regular fa-pen-to-square"></i></button>
                <button className='btn'><i class="fa-solid fa-trash"></i></button>
                <button className='btn'>  <i class="fa-brands fa-github"></i> </button>
            </div>
          </div>
         
          <p className='text-danger fw-bolder'>No Projects Uploaded!!!</p>
          
          </div>
      </div>
    </>
  )
}

export default Myprojects

