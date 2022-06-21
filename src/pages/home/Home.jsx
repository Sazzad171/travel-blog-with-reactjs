import React from 'react';
import { Link } from "react-router-dom";
import {Carousel, Col, Container, Row, Card} from 'react-bootstrap';

// images
import banner1 from '../../assets/img/home-banner/1.jpg';
import banner2 from '../../assets/img/home-banner/2.jpg';
import banner3 from '../../assets/img/home-banner/3.jpg';
import destination from '../../assets/img/destination.jpg';

// icons
import { BsArrowRightShort, BsPlayCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

// slick slider 
import Slider from "react-slick";
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";

export default function Home() {

  // slick slider
  const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* home banner start */}
      <section className='home-banner-area'>
        <Container fluid className='px-0'>
          <Carousel>
            <Carousel.Item>
              <div className="img-wrapper position-relative">
                <img className="d-block w-100" src={banner1} alt="First slide" />
                <div className="overlay"></div>
              </div>
              <Carousel.Caption>
                <h1 className='text-white mb-30'>Travel To The Beautiful Place</h1>
                <p className='mb-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <br /> Lorem Ipsum has been the industry's standard .
                </p>
                <Link to="/places" className='btn'>View Places</Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img-wrapper position-relative">
                <img className="d-block w-100" src={banner2} alt="Second slide" />
                <div className="overlay"></div>
              </div>
              <Carousel.Caption>
                <h1 className='text-white mb-30'>Welcome To The Travel</h1>
                <p className='mb-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <br /> Lorem Ipsum has been the industry's standard .
                </p>
                <Link to="/places" className='btn'>View Places</Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img-wrapper position-relative">
                <img className="d-block w-100" src={banner3} alt="Second slide" />
                <div className="overlay"></div>
              </div>
              <Carousel.Caption>
                <h1 className='text-white mb-30'>Choose The Best Tour Package</h1>
                <p className='mb-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <br /> Lorem Ipsum has been the industry's standard .
                </p>
                <Link to="/places" className='btn'>View Places</Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* home banner end */}

      {/* tour places start */}
      <section className="tour-places-area pt-80">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Popular Destinations</h5>
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
      {/* tour places end */}

      {/* photo gallery start */}
      <section className="photo-gallery-area pt-80">
        <Container fluid>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={6}>
              <h5 className="text-center text-orange mb-3">Tour Gallery</h5>
              <h2 className='text-center mb-4 mb-md-5'>Best Tourist's Shared <br /> Photos</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid className='px-0'>
          {/* slider */}
          <Slider {...slickSettings}>
            <div className='slider-item position-relative'>
              <img src={destination} className='img-fluid' alt="img" />
              <small className="place-name position-absolute bg-white text-orange">Dhaka</small>
            </div>
            <div className='slider-item position-relative'>
              <img src={banner1} className='img-fluid' alt="img" />
              <small className="place-name position-absolute bg-white text-orange">Dhaka</small>
            </div>
            <div className='slider-item position-relative'>
              <img src={banner3} className='img-fluid' alt="img" />
              <small className="place-name position-absolute bg-white text-orange">Dhaka</small>
            </div>
            <div className='slider-item position-relative'>
              <img src={banner2} className='img-fluid' alt="img" />
              <small className="place-name position-absolute bg-white text-orange">Dhaka</small>
            </div>
            <div className='slider-item position-relative'>
              <img src={banner3} className='img-fluid' alt="img" />
              <small className="place-name position-absolute bg-white text-orange">Dhaka</small>
            </div>
          </Slider>
        </Container>
      </section>
      {/* photo gallery end */}

      {/* video blogs start */}
      <section className="tour-videos-area pt-100 pb-80">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Popular Videos</h5>
              <h2 className='text-center mb-4 mb-md-5'>Our Latest Video Article <br /> For Travellers</h2>
            </Col>
          </Row>
          
          {/* place items */}
          <Row>

            {/* video item */}
            <Col md={4} className='mb-3 px-md-4'>
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
            <Col md={4} className='mb-3 px-md-4'>
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
            <Col md={4} className='mb-3 px-md-4'>
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
