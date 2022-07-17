import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import VideoCreate from './VideoCreate';
import VideoEdit from './VideoEdit';
import VideoTable from './VideoTable';

export default function Index({ videos }) {

  // state
  const [addVideoModal, setAddVideoModal] = useState(false);
  const [editVideoModal, setEditVideoModal] = useState(false);

  // modal handle
  const addPlaceModalHandle = () => {
    setAddVideoModal(true);
  }

  return (
    <Col md={9}>
      <div className="right-area px-4 py-3">
        <Row>
          <Col md={6}>
            <h4 className="mb-4">Videos</h4>
          </Col>
          <Col>
            <p className="text-md-end text-center">
              <button className="btn bg-success btn-success table-btn" onClick={addPlaceModalHandle}>Add new videos</button>
            </p>
          </Col>
        </Row>
        <VideoTable videos={ videos } setEditVideoModal={ setEditVideoModal } />

        {/* modal */}
        {addVideoModal && <VideoCreate addVideoModal={ addVideoModal } setAddVideoModal={ setAddVideoModal } />}
        {editVideoModal && <VideoEdit editVideoModal={ editVideoModal } setEditVideoModal={ setEditVideoModal } />}

      </div>
    </Col>
  )
}
