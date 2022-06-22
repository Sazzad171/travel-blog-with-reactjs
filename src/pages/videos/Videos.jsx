import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import banner1 from '../../assets/img/home-banner/1.jpg';

// icons
import { BsPlayCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Videos({ videos }) {
  return (
    <>
      <PageHeader />

      {/* video blogs start */}
      <section className="tour-videos-area pt-40 pb-40">
        <Container>
          {/* place items */}
          <Row>
            {/* video item */}
            {
              videos && videos.slice(0, 3).map((video) => (
                <Col md={4} className='mb-3 px-md-4' key={video.id}>
                  <Link to="/video-details">
                    <Card className='h-100 shadow border-0'>
                      <div className="card-img-wrapper position-relative">
                        <Card.Img variant="top" src={banner1} />
                        <BsPlayCircle className='play-icon text-white position-absolute' />
                        <div className="overlay position-absolute"></div>
                      </div>
                      <Card.Body>
                        <h4>{ video.name }</h4>
                        <p className="text-ash">
                          <FaMapMarkerAlt className='text-orange me-1' /> { video.location }
                        </p>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
      {/* video blogs end */}
    </>
  )
}
