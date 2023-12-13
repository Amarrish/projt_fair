import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import designicon from '../Assets/81178b47a8598f0c81c4799f2cdd4057.gif';


const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img
          variant="top"
          src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Chat-Application-1024x500.png"
        />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                style={{ width: '150px', height: '150px', borderRadius: '20px' }}
                src={designicon}
                alt=""
              />
            </Col>

            <Col>
              <h2>Project Title</h2>
              <h5>Project Overview</h5>
              <h5>Language used: HTML, CSS, React</h5>
            </Col>
          </Row>
          <hr />
          <div className="d-flex">
          <a href='https://github.com/dashboard' target='_blank' className='btn me-5'> <i class="fa-brands fa-github fa-2x"></i> </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
