import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

// images
import logo from '../assets/img/logo.png';

export default function Footer() {
  return (
    <>
      {/* footer top start */}
      <footer className='bg-dark pt-60 pb-55'>
        <Container>
          <Row>
            <Col md={4} className='mb-3'>
              <div className="logo-area">
                <a href="#fs">
                  <img src={logo} alt="logo" className='mb-3 w-75' />
                </a>
                <p className="text-white">Nature lovers Bangladesh is a Bangladeshi Travel Blog.</p>
              </div>
            </Col>
            <Col md={3} className='mb-3'>
              <div className="links-area">
                <h4 className="text-white mb-3">Quick Links</h4>
                <ul>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Home</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Contact US</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Terms & conditions</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Privacy & Policy</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} className='mb-3'>
              <div className="links-area">
                <h4 className="text-white mb-3">About Us</h4>
                <ul>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Our story</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Working with us</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Tour guide</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Be our partner</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} className='mb-3'>
              <div className="links-area">
                <h4 className="text-white mb-3">Support</h4>
                <ul>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Customer Support</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Terms & conditions</a>
                  </li>
                  <li className='mb-1'>
                    <a href="#hg" className='text-ash'>Privacy & Policy</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* footer bottom start */}
      <div className="footer-bottom py-3">
        <Container>
          <p className="text-center text-white">&copy; { new Date().getFullYear() } - All rights reserved by Nature Lovers BD.</p>
        </Container>
      </div>
    </>
  )
}
