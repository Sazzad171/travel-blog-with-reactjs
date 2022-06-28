import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Navbar, Container, Nav, Offcanvas, Image} from 'react-bootstrap';

// images
import logo from '../assets/img/logo.png';

export default function Header() {

  // state
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isMobile] = useState(window.innerWidth < 992);

  let location = useLocation();

  // hook
  useEffect(() => {
    // goto top when route change
    window.scrollTo(0, 0);
  }, [location]);

  // hide offCanvas on click link
  const toggleOffCanvas = () => {
    setShowOffCanvas( (showOffCanvas) => !showOffCanvas );
  }

  return (
    <header className="white-variant">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link to="" className='navbar-brand'>
            <Image src={logo} className='logo' />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={toggleOffCanvas} />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" placement="end"
            show={ isMobile ? showOffCanvas : '' } onHide={toggleOffCanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Nature Lovers BD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <a href="#fd" className='nav-link' onClick={toggleOffCanvas}>Hello, Sazzad</a>
                <Link to="" className='nav-link' onClick={toggleOffCanvas}>Logout</Link>
                <a href="https://nature-lovers-bd.netlify.app" className='nav-link' target="_blank" rel='noreferrer' onClick={toggleOffCanvas}>Goto Site</a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}