import React from 'react'
import {useState} from 'react'
import {Navbar, Nav,  NavDropdown, Container, Button, Modal} from 'react-bootstrap'
import LoginModal from './LoginModal';
import { FaHeartbeat } from 'react-icons/fa'
import { IconContext } from "react-icons";

function NavbarC() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
            <Navbar bg="dark" expand="lg" variant="dark" >
                <Navbar.Brand href="#home" className="ms-4 auto">
                <FaHeartbeat className="me-2 ms-1"/> {" "}
                    Helpage
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="m-sm-2 w-100 order-3 dual-collapse2">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home" className="me-4 mt-2" expand="lg">Home</Nav.Link>
                    <Nav.Link href="#link" className="me-5">
                        <Button variant="danger" onClick={handleShow}>Log In</Button>
                    </Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header centered closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal />
                </Modal.Body>
                
            </Modal>
        </IconContext.Provider>
    )
}

export default NavbarC
