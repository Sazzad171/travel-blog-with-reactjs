import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {Navbar, Container, Nav, Offcanvas, Image} from 'react-bootstrap';

// images
import logo from '../assets/img/logo.png';

export default function Header() {

  // state
  const [scroll, setScroll] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isMobile] = useState(window.innerWidth < 992);

  let location = useLocation();

  // hook
  useEffect(() => {
    // scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    });

    // goto top when route change
    window.scrollTo(0, 0);
  }, [location]);

  // hide offCanvas on click link
  const toggleOffCanvas = () => {
    setShowOffCanvas( (showOffCanvas) => !showOffCanvas );
  }

  return (
    <header className={`position-fixed ${scroll ? "white-variant" : ""} `}>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link to="/" className='navbar-brand'>
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
                <Link to="/" className='nav-link' onClick={toggleOffCanvas}>Home</Link>
                <Link to="/places" className='nav-link' onClick={toggleOffCanvas}>Places</Link>
                <Link to="/videos" className='nav-link' onClick={toggleOffCanvas}>Videos</Link>
                <Link to="/gallery" className='nav-link' onClick={toggleOffCanvas}>Gallery</Link>
                <Link to="/about" className='nav-link' onClick={toggleOffCanvas}>About</Link>
                <Link to="/contact" className='nav-link' onClick={toggleOffCanvas}>Contact</Link>
                <a href="https://nature-lovers-bd-admin.netlify.app/" className='nav-link' target="_blank" rel="noreferrer">Admin</a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}