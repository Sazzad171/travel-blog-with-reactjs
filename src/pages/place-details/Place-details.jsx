import React from 'react';
import { Link } from "react-router-dom";
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

export default function PlaceDetails() {

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

  return (
    <>
      <PageHeader />
      
      {/* place details start */}
      <section className="place-details-area pt-40 pb-40">
        <Container>
          <Row>
            {/* left details */}
            <Col md={8} className='mb-3'>
              <div className="place-details-box">
                <img src={destination} className='mb-3 img-fluid w-100' alt="place" />
                <h3 className='mb-1 text-red'>Special London Tour</h3>
                <p className="text-ash mb-3">
                  <FaMapMarkerAlt className='text-orange me-1' /> Sunamganj
                </p>
                <p>
                  Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempo Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Seddo Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur a dipisicing elit at leo dignissim congue.
                  <br /><br />
                  Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempo Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.
                </p>
              </div>
            </Col>
            {/* right others */}
            <Col md={4}>
              <div className="travel-tips-box p-4 mb-4 mb-md-5">
                <h4 className='text-center text-white'>Travel Tips</h4>
                <ul className='ms-3'>
                  <li>fasd sdf sdfa dsf</li>
                  <li>fdsaf</li>
                  <li>fasd sdfa saf</li>
                  <li>fdsaf sdfds</li>
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
