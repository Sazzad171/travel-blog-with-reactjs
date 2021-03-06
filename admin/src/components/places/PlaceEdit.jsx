import React from 'react';
import { Form, Modal, Button } from "react-bootstrap";

export default function PlaceEdit({ editPlaceModal, setEditPlaceModal }) {

  // close modal
  const handleClose = () => {
    setEditPlaceModal(false);
  }

  return (
  <Modal show={editPlaceModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new place</Modal.Title>
      </Modal.Header>
      <div className="modal-body">
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Place Name</Form.Label>
            <Form.Control type="text" placeholder="Enter place name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Place location</Form.Label>
            <Form.Control type="text" placeholder="Enter place location" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Place Description</Form.Label>
            <Form.Control type="text" placeholder="Enter place description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="img">
            <Form.Label>Place image</Form.Label>
            <Form.Control type="file" placeholder="Select image file" />
          </Form.Group>
        </Form>
      </div>
      <Modal.Footer>
        <Button className='btn bg-danger btn-danger' onClick={handleClose}>
          Close
        </Button>
        <Button className='btn bg-success btn-success' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
