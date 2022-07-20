import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import PlaceCreate from './PlaceCreate';
import PlaceEdit from './PlaceEdit';
import PlaceTable from './PlaceTable';

export default function Index({ places, setPlaces }) {

  // state
  const [addPlaceModal, setAddPlaceModal] = useState(false);
  const [editPlaceModal, setEditPlaceModal] = useState(false);

  // modal handle
  const addPlaceModalHandle = () => {
    setAddPlaceModal(true);
  }

  return (
    <Col md={9}>
      <div className="right-area px-4 py-3">
        <Row>
          <Col md={6}>
            <h4 className="mb-4">Places</h4>
          </Col>
          <Col>
            <p className="text-md-end text-center">
              <button className="btn bg-success btn-success table-btn" onClick={addPlaceModalHandle}>Add new place</button>
            </p>
          </Col>
        </Row>
        <PlaceTable places={ places } setPlaces={ setPlaces } setEditPlaceModal={ setEditPlaceModal } />

        {/* modal */}
        {addPlaceModal && <PlaceCreate addPlaceModal={ addPlaceModal } setAddPlaceModal={ setAddPlaceModal } />}
        {editPlaceModal && <PlaceEdit editPlaceModal={ editPlaceModal } setEditPlaceModal={ setEditPlaceModal } />}

      </div>
    </Col>
  )
}
