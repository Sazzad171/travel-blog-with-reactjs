import React from 'react';
import { Form } from "react-bootstrap";

export default function PlaceEdit() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>
  )
}
