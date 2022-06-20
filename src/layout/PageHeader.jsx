import React from 'react';
import { useEffect } from 'react';
import {Container} from 'react-bootstrap';

// images
import banner1 from '../assets/img/home-banner/1.jpg';

export default function PageHeader() {

  // every render
  useEffect(() => {
    let lastPart = window.location.href.split("/").pop();
    console.log(lastPart);
  }, []);

  return (
    <section className='home-banner-area'>
      <Container fluid className='px-0'>
        <img src={banner1} alt="page header" />
      </Container>
    </section>
  )
}
