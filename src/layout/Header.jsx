import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap';

import logo from '../assets/img/logo.png';

export default function Header() {
  return (
    <header className='position-fixed'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Places</Nav.Link>
              <Nav.Link href="#link">Videos</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dropdown</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}