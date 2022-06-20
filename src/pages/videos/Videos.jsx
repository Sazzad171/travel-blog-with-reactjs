import React from 'react';
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import banner1 from '../../assets/img/home-banner/1.jpg';

// icons
import { BsPlayCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Videos() {
  return (
    <>
      <PageHeader />

      {/* video blogs start */}
      <section className="tour-videos-area pt-40 pb-40">
        <Container>
          {/* place items */}
          <Row>
            {/* video item */}
            <Col md={4} className='mb-3'>
              <a href="#sdf">
                <Card className='h-100 shadow border-0'>
                  <div className="card-img-wrapper position-relative">
                    <Card.Img variant="top" src={banner1} />
                    <BsPlayCircle className='play-icon text-white position-absolute' />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <Card.Body>
                    <h4>Tanguar Haor</h4>
                    <p className="text-ash">
                      <FaMapMarkerAlt className='text-orange me-1' /> Sunamganj
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* video item */}
            <Col md={4} className='mb-3'>
              <a href="#sdf">
                <Card className='h-100 shadow border-0'>
                  <div className="card-img-wrapper position-relative">
                    <Card.Img variant="top" src={banner1} />
                    <BsPlayCircle className='play-icon text-white position-absolute' />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <Card.Body>
                    <h4>Tanguar Haor</h4>
                    <p className="text-ash">
                      <FaMapMarkerAlt className='text-orange me-1' /> Sunamganj
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* video item */}
            <Col md={4} className='mb-3'>
              <a href="#sdf">
                <Card className='h-100 shadow border-0'>
                  <div className="card-img-wrapper position-relative">
                    <Card.Img variant="top" src={banner1} />
                    <BsPlayCircle className='play-icon text-white position-absolute' />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <Card.Body>
                    <h4>Tanguar Haor</h4>
                    <p className="text-ash">
                      <FaMapMarkerAlt className='text-orange me-1' /> Sunamganj
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* video blogs end */}
    </>
  )
}
