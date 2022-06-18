import React from 'react';
import {Carousel, Container} from 'react-bootstrap';

// images
import banner1 from '../../assets/img/home-banner/1.jpg';
import banner2 from '../../assets/img/home-banner/2.jpg';
import banner3 from '../../assets/img/home-banner/3.jpg';

export default function Home() {
  return (
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
  )
}
