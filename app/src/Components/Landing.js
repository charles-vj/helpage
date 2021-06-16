import React, {useState} from 'react'
import {Modal, Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import first from './4.svg'
import second from './5.svg'
import third from './7.svg'
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

function Landing() {
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);

    const handleModalClose = () => setShow(false);
    const handleSignupClose = () => setSignupShow(false);
    const handleButtonClose = () => {setShow(false);setSignupShow(true);}
    const handleShow = () => setShow(true);
    const handleButton2Close = () => {setSignupShow(false);setShow(true);}
    return (
        <Container fluid>
            <Jumbotron>
            <Row className="d-flex align-items-center bg-danger bg-gradient flex-wrap " style={{ minHeight: "88.5vh"}}>
                <Col className="d-flex flex-column align-items-center">
                    <h1 className="fw-bold" style={{ maxWidth: "80vh"}}>Crushing the virus together!!!</h1>
                    <h4 className="text-white-50 me-2" style={{ maxWidth: "70vh"}}>Find people around your area who need help or are asking for help!</h4>
                    <Button variant="dark" className="mt-4 ms-5"  onClick={handleShow} size="lg"> Get on board ! </Button>
                    
                </Col>
                <Col><img src={first} alt="Heart" width="90%" /></Col>
            </Row>
            
            <Row className="d-flex align-items-center bg-dark bg-gradient flex-wrap " style={{ minHeight: "115vh"}}>
                
                <Col className="d-flex flex-column align-items-center ms-5"><img className="mb-3" src={second} alt="Heart" width="70%" /></Col>
                <Col className="d-flex flex-column align-items-center">
                    <h1 className="text-danger fw-bold" style={{ maxWidth: "70vh"}}>Volunteer to help people in your area!!</h1>
                    <Button variant="danger" className="mt-4 ms-5"  onClick={handleShow} size="lg">Become a superhero ! </Button>
                    
                </Col>
            </Row>
            <Row className="d-flex align-items-center bg-danger bg-gradient flex-wrap " style={{ minHeight: "100vh"}}>
                <Col className="d-flex flex-column align-items-center">
                    <h1 className="" style={{ maxWidth: "70vh"}}>Find your local superhero to defeat the virus here !</h1>
                    <Button variant="dark" className="mt-4 ms-5"  onClick={handleShow} size="lg"> Join Now ! </Button>
                    
                </Col>
                <Col><img src={third} alt="Heart" width="90%"/></Col>
            </Row>
            </Jumbotron>
            <Modal show={show} onHide={handleModalClose}>
                <Modal.Header centered closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal />
                    <Modal.Footer>
                    <span>Don't have an account ? </span>
                    <Button className="mt-1" onClick={handleButtonClose} variant="dark">Signup</Button></Modal.Footer>
                </Modal.Body>
                
            </Modal>
            <Modal show={signupShow} onHide={handleSignupClose}>
                <Modal.Header centered closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignupModal />
                    <Modal.Footer>
                    <span>Already have an account ? </span>
                    <Button className="mt-1" onClick={handleButtonClose} variant="dark">Login</Button></Modal.Footer>
                </Modal.Body>
                
            </Modal>
        </Container>
    )
}

export default Landing
