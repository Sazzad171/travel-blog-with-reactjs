import React from 'react';
import { Col } from "react-bootstrap";
import PlaceTable from './PlaceTable';

export default function Index({ places }) {
  return (
    <Col md={9}>
      <div className="right-area px-4 py-3">
        <h4 className="mb-4">Places</h4>

        <PlaceTable places={ places } />

      </div>
    </Col>
  )
}
