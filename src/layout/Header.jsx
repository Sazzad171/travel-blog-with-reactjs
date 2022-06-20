import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Image} from 'react-bootstrap';

// images
import logo from '../assets/img/logo.png';

export default function Header() {

  // state
  const [scroll, setScroll] = useState(false);

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

  return (
    <header className={`position-fixed ${scroll ? "white-variant" : ""} `}>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link to="/" className='navbar-brand'>
            <Image src={logo} className='logo' />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Nature Lovers BD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/places" className='nav-link'>Places</Link>
                <Link to="/videos" className='nav-link'>Videos</Link>
                <Link to="/about" className='nav-link'>About</Link>
                <Link to="/contact" className='nav-link'>Contact</Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item href="#action/3.1">Dropdown</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}