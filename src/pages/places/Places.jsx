import React from 'react';
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import destination from '../../assets/img/destination.jpg';

// icons
import { BsArrowRightShort } from 'react-icons/bs';

export default function Places() {
  return (
    <>
      <PageHeader />

      {/* tour places start */}
      <section className="tour-places-area pt-40 pb-40">
        <Container>
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
