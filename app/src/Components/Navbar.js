import React from 'react'
import {useState} from 'react'
import {Navbar, Nav,Button, Modal} from 'react-bootstrap'
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { FaHeartbeat } from 'react-icons/fa'
import { IconContext } from "react-icons";

function NavbarC() {
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);

    const handleModalClose = () => setShow(false);
    const handleSignupClose = () => setSignupShow(false);
    const handleButtonClose = () => {setShow(false);setSignupShow(true);}
    const handleButton2Close = () => {setSignupShow(false);setShow(true);}
    const handleShow = () => setShow(true);
    return (
        <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
            <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top" >
                <Navbar.Brand href="/login" className="ms-4 auto">
                <FaHeartbeat className="me-2 ms-3"/> {" "}
                    Helpage
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="m-sm-2 w-100 order-3 dual-collapse2">
                    <Nav className="ms-auto">
                    <Nav.Link href="/login" className="me-4 mt-2" expand="lg">Home</Nav.Link>
                    <Nav.Link href="#link" className="me-5">
                        <Button variant="danger" onClick={handleShow}>Log In</Button>
                    </Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
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
        </IconContext.Provider>
    )
}

export default NavbarC
