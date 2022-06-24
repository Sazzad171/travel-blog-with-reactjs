import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import destination from '../../assets/img/destination.jpg';

// icons
import { BsArrowRightShort } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

// slick slider 
import Slider from "react-slick";
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";
import { useState } from 'react';

export default function PlaceDetails({ places }) {

  // state
  const [placeDetails, setPlaceDetails] = useState({});

  // slick slider
  const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  // get id
  const params = useParams();

  useEffect(() => {
    places.map((place) => {
      if(place.id === params.id) {
        return (setPlaceDetails(place));
      }
      else return '';
    });
  }, [params, places]);

  return (
    <>
      <PageHeader />

      {/* page header */}
      <section className='page-header-area'>
        <Container fluid className='px-0'>
          <div className="img-wrapper position-relative">
            <img src={destination} alt="page header" />
            <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
              <h2 className='text-white pt-5'>{ placeDetails.name }</h2>
            </div>
          </div>
        </Container>
      </section>
      
      {/* place details start */}
      <section className="place-details-area pt-40 pb-40">
        <Container>
          <Row>
            {/* left details */}
            <Col md={8} className='mb-3'>
              <div className="place-details-box">
                <img src={ placeDetails.img } className='mb-3 img-fluid w-100' alt="place" />
                <h3 className='mb-1 text-red'>{ placeDetails.name }</h3>
                <p className="text-ash mb-3">
                  <FaMapMarkerAlt className='text-orange me-1' /> { placeDetails.location }
                </p>
                <p>
                   { placeDetails.description }
                </p>
              </div>
            </Col>
            {/* right others */}
            <Col md={4}>
              <div className="travel-tips-box p-4 mb-4 mb-md-5">
                <h4 className='text-center text-white'>Travel Tips</h4>
                <ul className='ms-3'>
                  <li>Do your research</li>
                  <li>Don’t draw attention</li>
                  <li>Make copies of important documents</li>
                  <li>Keep your friends and family updated</li>
                  <li>Be wary of public Wi-Fi</li>
                  <li>Safeguard your hotel room</li>
                  <li>Be aware of your surroundings</li>
                </ul>
              </div>
              <div className="img-slider">
                <h4 className="text-center mb-3">Destination Images</h4>
                <Slider {...slickSettings}>
                  <div className="slider-item">
                    <img src={destination} alt="slider img" />
                  </div>
                  <div className="slider-item">
                    <img src={destination} alt="slider img" />
                  </div>
                  <div className="slider-item">
                    <img src={destination} alt="slider img" />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* place details end */}

      {/* related places start */}
      <section className="tour-places-area pt-40 pb-40">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Related Destinations</h5>
              <h2 className='text-center mb-4 mb-md-5'>Travel Most Popular Place In <br /> The World</h2>
            </Col>
          </Row>
          
          {/* place items */}
          <Row>

            {/* destination item */}
            <Col md={4} className='mb-3'>
              <Card className='h-100 shadow border-0'>
                <Card.Img variant="top" src={destination} />
                <Card.Body>
                  <Row className='align-items-center'>
                    <Col xs={9}>
                      <h4 className='mb-1'>Beijing, China</h4>
                      <p className='text-ash'>China</p>
                    </Col>
                    <Col xs={3}>
                      <Link to="/place-details" className="btn rounded-circle"><BsArrowRightShort /></Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* destination item */}
            <Col md={4} className='mb-3'>
              <Card className='h-100 shadow border-0'>
                <Card.Img variant="top" src={destination} />
                <Card.Body>
                  <Row className='align-items-center'>
                    <Col xs={9}>
                      <h4 className='mb-1'>Beijing, China</h4>
                      <p className='text-ash'>China</p>
                    </Col>
                    <Col xs={3}>
                      <a href="#ds" className="btn rounded-circle"><BsArrowRightShort /></a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* destination item */}
            <Col md={4} className='mb-3'>
              <Card className='h-100 shadow border-0'>
                <Card.Img variant="top" src={destination} />
                <Card.Body>
                  <Row className='align-items-center'>
                    <Col xs={9}>
                      <h4 className='mb-1'>Beijing, China</h4>
                      <p className='text-ash'>China</p>
                    </Col>
                    <Col xs={3}>
                      <a href="#ds" className="btn rounded-circle"><BsArrowRightShort /></a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* related places end */}
    </>
  )
}
