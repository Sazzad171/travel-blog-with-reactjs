import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from "../../layout/PageHeader"

// images
import gallery1 from '../../assets/img/home-banner/1.jpg';
import gallery2 from '../../assets/img/places/2.jpg';
import gallery3 from '../../assets/img/places/3.jpg';
import gallery5 from '../../assets/img/places/4.jpg';

export default function index() {
  return (
    <>
    <PageHeader />

    {/* gallery photos start */}
    <section className="gallery-photos-area py-3">
      <Container fluid>
        <Row>
          <Col md={4}>
            <div className="img-item mb-3">
              <img src={ gallery1 } alt="" className="img-fluid" />
            </div>
            <div className="img-item mb-3">
              <img src={ gallery2 } alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="img-item mb-3">
              <img src={ gallery3 } alt="" className="img-fluid" />
            </div>
            <div className="img-item mb-3">
              <img src={ gallery5 } alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="img-item mb-3">
              <img src={ gallery5 } alt="" className="img-fluid" />
            </div>
            <div className="img-item mb-3">
              <img src={ gallery1 } alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* gallery photos end */}
    </>
  )
}
