import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Col,Row } from 'react-bootstrap'
import ProjectCard from '../Components/Projectcard'


const Projects = () => {

useEffect(()=>{
  
  if(localStorage.getItem("Role")){

  }
},[])


  return (
    <div>
      {/* navbar */}
      <Header/>
      {/*all projects */}
      <div className='mt-5 text-center'>
    <h1 className='mt-5 mb-5'>All Projects</h1>
    {/* search */}
    <div className="d-flex  mb-5 justify-content-center w-100">
      <div className="d-flex w-50 align-items-center">
        <input className='form-control' placeholder='Search Project By Technologies'/>
        <i style={{marginLeft:'-30px'}} class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
      </div>

      <div className="container-fluid">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Projects