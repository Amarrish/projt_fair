import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = ({insidedashboard}) => {
  return (
    <div>
         <Navbar className="bg-info w-100 bg-success" style={{top:0, zIndex:'1'}}>
        <Container>
          <Navbar.Brand >
            <i class="fa-brands fa-stack-overflow fa-bounce"></i>
           <Link to={'/'} className='text-light' style={{textDecoration:'none'}}>Project Fair</Link> 
          </Navbar.Brand>
          {
            insidedashboard&&
            <button className='ms-auto btn fs-5 fw-bolder text-light align-items-center'>Logout <i class="fa-solid fa-right-from-bracket"></i></button> 
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header