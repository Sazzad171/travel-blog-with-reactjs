import React from 'react';
import { Link, useParams } from "react-router-dom";
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import banner1 from '../../assets/img/home-banner/1.jpg';
import destination from '../../assets/img/destination.jpg';

// icons
import { BsPlayCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

// slick slider 
import Slider from "react-slick";
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";
import { useEffect } from 'react';

export default function VideoDetails() {

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
    console.log(params.id);
  }, [params]);

  return (
    <>
      <PageHeader />

      {/* page header */}
      <section className='page-header-area'>
        <Container fluid className='px-0'>
          <div className="img-wrapper position-relative">
            <img src={destination} alt="page header" />
            <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
              <h2 className='text-white pt-5'>Page header</h2>
            </div>
          </div>
        </Container>
      </section>
      
      {/* place details start */}
      <section className="place-details-area pt-40 pb-40">
        <Container>
          <Row>
            {/* left details */}
            <Col md={8}>
              <div className="place-details-box">
              <iframe src="https://www.youtube.com/embed/aIx0-LuKRvg" className='video mb-3' title='vidoe' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

      {/* related videos start */}
      <section className="tour-videos-area pt-40 pb-40">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Related Videos</h5>
              <h2 className='text-center mb-4 mb-md-5'>Our Latest Video Article <br /> For Travellers</h2>
            </Col>
          </Row>
          
          {/* place items */}
          <Row>

            {/* video item */}
            <Col md={4} className='mb-3 px-md-4'>
              <Link to="/video-details">
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
              </Link>
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
      {/* related videos end */}
    </>
  )
}
