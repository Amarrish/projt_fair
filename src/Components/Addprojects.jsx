import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Addproject = () => {

    const [show, setShow] = useState(false);
    const [projectDetails,setProjectDetails] = useState({
      title:"",
      languages:"",
      github:"",
      websites:"",
      overview:"",
      image:"",
      userId:""
    })

    useEffect(()=>{
      if(localStorage.getItem("existingUser")){
        setProjectDetails({...projectDetails,userId:JSON.parse(localStorage.getItem("existingUser"))._id});
      }
    },[])
    console.log(projectDetails);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
         <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
            <label htmlFor="profilepic">
                <input id='profilepic' type="file" style={{display:'none'}} />
                <img style={{width:'100px', height:'100px', borderRadius:'50%'}} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="profile pic" />
            </label> 
            </div>
            <div className="col-lg-6">
                <input type="text" className='form-control' placeholder='Project Name'/>
                <input type="text" className='form-control' placeholder='Language Used'/>
                <input type="text" className='form-control' placeholder='GitHub Link'/>
                <input type="text" className='form-control' placeholder='LinkedIn'/>
            </div>
            <input type="text" className='form-control' placeholder='Project Overview'/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject