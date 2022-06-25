import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from "../../layout/PageHeader"

export default function Index( {gallery} ) {

  // state
  const [itemsDivide, setItemsDivide] = useState('');

  // image sort
  let totalItems = gallery.length;
  let dividedItems = Math.floor(totalItems/3);

  useEffect(() => {
    setItemsDivide(dividedItems);
  }, [dividedItems]);

  return (
    <>
    <PageHeader />

    {/* gallery photos start */}
    <section className="gallery-photos-area py-3">
      <Container fluid>
        <Row>
          {gallery && gallery.map((galleryItem) => {
            if (itemsDivide === 2) {
              return <Col md={4} key={ galleryItem.id }>
                <div className="img-item position-relative mb-3">
                  <img src={ galleryItem.img } alt="" className="img-fluid" />
                  <small className="place-name position-absolute bg-white text-orange">{ galleryItem.location }</small>
                </div>
              </Col>
            }
            else
            return ''
          })}
        </Row>
      </Container>
    </section>
    {/* gallery photos end */}
    </>
  )
}
