import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import destination from '../../assets/img/destination.jpg';

// icons
import { BsPlayCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

// slick slider 
import Slider from "react-slick";
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";

export default function VideoDetails({ videos, gallery }) {

  // state
  const [videoDetails, setVideoDetails] = useState({});

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
    videos.map((video) => {
      if( video.id === params.id ) {
        return ( setVideoDetails(video) );
      }
      else return '';
    });
  }, [params, videos]);

  return (
    <>
      <PageHeader />

      {/* page header */}
      <section className='page-header-area'>
        <Container fluid className='px-0'>
          <div className="img-wrapper position-relative">
            <img src={destination} alt="page header" />
            <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
              <h2 className='video-details-page-header text-white text-center pt-5 w-50'>{ videoDetails.name }</h2>
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
              <iframe src={ videoDetails.link } className='video mb-3' title='vidoe' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h3 className='mb-1 text-red'>{ videoDetails.name }</h3>
                <p className="text-ash mb-3">
                  <FaMapMarkerAlt className='text-orange me-1' /> { videoDetails.location }
                </p>
                <p>
                  { videoDetails.description }
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
                  {gallery && gallery.map((galleryItem) => (
                    <div className="slider-item" key={ galleryItem.id }>
                      <img src={ galleryItem.img } alt="slider img" />
                    </div>
                  ))}
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
            {videos && videos.slice(0, 3).map((video) => (
              <Col md={4} className='mb-3 px-md-4' key={ video.id }>
                <Link to={`/video-details/${video.id}`}>
                  <Card className='h-100 shadow border-0'>
                    <div className="card-img-wrapper position-relative">
                      <Card.Img variant="top" src={ video.img } />
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
            ))}

          </Row>
        </Container>
      </section>
      {/* related videos end */}
    </>
  )
}
