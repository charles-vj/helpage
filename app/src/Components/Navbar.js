import React from 'react'
import {Navbar, Nav,  NavDropdown, Container} from 'react-bootstrap'

function NavbarC() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home" className="ms-4 auto">Helpage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="m-sm-2 w-100 order-3 dual-collapse2">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home" className="me-1">Home</Nav.Link>
                    <Nav.Link href="#link" className="me-5">Link</Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarC
