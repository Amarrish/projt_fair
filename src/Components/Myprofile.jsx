import React from 'react'
import {Button} from 'react-bootstrap';
const Myprofile = () => {
  return (
    <>
    <div className='card shadow p-5'>
        <div className='d-flex justify-content-between'>
          <h6>Myprofile</h6>
          <Button><i class="fa-solid fa-check"></i></Button>
        </div>
       <div className='justify-content-center text-center align-items-center'>

        <label htmlFor="profile">
            <input id='profile' type="file" style={{display:'none'}} />
        <img style={{width:'100px', height:'100px', borderRadius:'50%'}} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="profile pic" />
        </label>
       

       <div className=' mb-2'>
        <input className='form-control' placeholder='username' type="text" name="" id="" />
        </div>
       
        <div className=' mb-2'>
        <input className='form-control' placeholder='LinkedIn' type="text" name="" id="" />
        </div>

        <div className=' mb-2'>
        <input className='form-control' placeholder='GitHub' type="text" name="" id="" />
        </div>

         
       </div>
      </div></>
  )
}

export default Myprofile