import React from 'react';
import {Carousel, Col, Container, Row, Card} from 'react-bootstrap';

// images
import banner1 from '../../assets/img/home-banner/1.jpg';
import banner2 from '../../assets/img/home-banner/2.jpg';
import banner3 from '../../assets/img/home-banner/3.jpg';
import destination from '../../assets/img/destination.jpg';

// icons
import { BsArrowRightShort } from 'react-icons/bs';

export default function Home() {
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
                <a href="#fsa" className='btn'>View Places</a>
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
                <a href="#fsa" className='btn'>View Places</a>
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
                <a href="#fsa" className='btn'>View Places</a>
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
              <h2 className='text-center mb-4'>Travel Most Popular Place In The World</h2>
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
    </>
  )
}
