import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// icons
import { FaFacebookF, FaTwitter, FaYoutube, FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <PageHeader />
      
      {/* get in touch start */}
      <section className="get-in-touch-area pt-60 pb-60">
        <Container>
          <Row className='align-items-center'>
            <Col md={7} className='mb-3'>
              <div className="details-area mb-3">
                <h6 className="text-orange text-uppercase">Get in touch</h6>
                <h2 className='text-uppercase'>REACH & CONTACT US!</h2>
                <p className="text-ash">
                  Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. 
                  Sit ornare mollitia tenetur, aptent. Eget feugiat error necessitatibus taciti..
                </p>
              </div>
              <div className="social-icon-area">
                <ul>
                  <li>
                    <a href="#f"><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href="#d"><FaTwitter /></a>
                  </li>
                  <li>
                    <a href="#d"><FaYoutube /></a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5}>
              {/* map */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239289454!2d90.27923794728072!3d23.780887455957277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1656214879218!5m2!1sen!2sbd" title="map" className='rounded' width="100%" height="350" loading="lazy"></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      {/* get in touch end */}

      {/* contact medium area start */}
      <section className="contact-medium-area pt-60 pb-60">
        <Container>
          <Row>
            <Col md={4} className='mb-3'>
              <div className="item h-100 px-4 py-4 py-md-5 text-center">
                <span className="icon mb-4"><FaRegEnvelope /></span>
                <h4 className='text-black text-uppercase'>email address</h4>
                <ul>
                  <li>support@gmail.com</li>
                  <li>info@domain.com</li>
                </ul>
              </div>
            </Col>
            <Col md={4} className='mb-3'>
              <div className="item h-100 px-4 py-4 py-md-5 text-center">
                <span className="icon mb-4"><FaPhoneAlt /></span>
                <h4 className='text-black text-uppercase'>PHONE NUMBER</h4>
                <ul>
                  <li>+880 165367444</li>
                  <li>+880 165367445</li>
                </ul>
              </div>
            </Col>
            <Col md={4} className='mb-3'>
              <div className="item h-100 px-4 py-4 py-md-5 text-center">
                <span className="icon mb-4"><FaMapMarkerAlt /></span>
                <h4 className='text-black text-uppercase'>ADDRESS LOCATION</h4>
                <ul>
                  <li>Dhaka, Bangladesh</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* contact medium area end */}
    </>
  )
}
