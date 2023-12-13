import React from 'react'
import {Col,Row} from 'react-bootstrap'
import Projectcard from '../Components/Projectcard'
import { Link } from 'react-router-dom';
const Homeprojects = () => {
  return (
    <>
    <h3 className='text-center text-dark mt-2'>Explore our project</h3>
        <marquee scrollAmount={20}>
        <Row>
            <Col>
            <Projectcard/>
            </Col>
        </Row>
        </marquee>
        <div className='text-light text-center '><Link className='text-dark' to={'/projects'}>View More Projects</Link></div>
    </>
  )
}

export default Homeprojects