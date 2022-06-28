import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from "../../layout/PageHeader"

export default function Index( {gallery} ) {

  return (
    <>
    <PageHeader />

    {/* gallery photos start */}
    <section className="gallery-photos-area py-3">
      <Container fluid>
        <Row data-masonry='{"percentPosition": true }'>
          {gallery && gallery.map((galleryItem) => (
            <Col md={4} key={ galleryItem.id }>
              <div className="img-item position-relative mb-3">
                <img src={ galleryItem.img } alt="" className="img-fluid" />
                <small className="place-name position-absolute bg-white text-orange">{ galleryItem.location }</small>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    {/* gallery photos end */}
    </>
  )
}
