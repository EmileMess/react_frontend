import '..//..//App.css';
import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">AIGUI</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Tool" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Upload">Upload</NavDropdown.Item>
                                    <NavDropdown.Item href="/Organize">Organize</NavDropdown.Item>
                                    <NavDropdown.Item href="/Annotate">Annotate</NavDropdown.Item>
                                    <NavDropdown.Item href="/Train">Train</NavDropdown.Item>
                                    <NavDropdown.Item href="/Deploy">Deploy</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/Instructions">Instructions</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/About">About</Nav.Link>
                                <Nav.Link href="/Contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
}

export default Navigation;