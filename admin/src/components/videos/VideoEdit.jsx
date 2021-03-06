import React from 'react';
import { Form, Modal, Button } from "react-bootstrap";

export default function VideoEdit({ editVideoModal, setEditVideoModal }) {

  // close modal
  const handleClose = () => {
    setEditVideoModal(false);
  }

    // after form submit
    const handleSubmit = () => {
      setEditVideoModal(false);
      alert("You have no permission to edit video item!");
    }

  return (
  <Modal show={editVideoModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit video info</Modal.Title>
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

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Place link</Form.Label>
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
        <Button className='btn bg-success btn-success' onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
