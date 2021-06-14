import React, {useState} from 'react'
import {Navbar,Modal, Nav,  NavDropdown, Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import first from './4.svg'
import LoginModal from './LoginModal';

function Landing() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid>
            <Jumbotron>
            <Row className="d-flex align-items-center bg-danger bg-gradient flex-wrap " style={{ minHeight: "89vh"}}>
                <Col className="d-flex flex-column align-items-center">
                    <h1 className="" style={{ maxWidth: "50vh"}}>Find your superhero to defeat the virus here !</h1>
                    <Button variant="dark" className="mt-4 ms-5"  onClick={handleShow}> Join Now ! </Button>
                    
                </Col>
                <Col><img src={first} alt="Heart" width="90%" /></Col>
            </Row>
            </Jumbotron>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header centered closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal />
                </Modal.Body>
                
            </Modal>
        </Container>
    )
}

export default Landing
