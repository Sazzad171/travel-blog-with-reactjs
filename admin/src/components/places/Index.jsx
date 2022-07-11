import React from 'react';
import { Col, Row } from "react-bootstrap";
import PlaceTable from './PlaceTable';

export default function Index({ places }) {
  return (
    <Col md={9}>
      <div className="right-area px-4 py-3">
        <Row>
          <Col md={6}>
            <h4 className="mb-4">Places</h4>
          </Col>
          <Col>
            <p className="text-md-end text-center">
              <button className="btn bg-success btn-success table-btn">Add new place</button>
            </p>
          </Col>
        </Row>
        <PlaceTable places={ places } />

      </div>
    </Col>
  )
}
