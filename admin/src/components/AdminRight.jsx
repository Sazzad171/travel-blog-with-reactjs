import React from 'react';
import { Col, Table, Form } from "react-bootstrap";

export default function AdminRight() {
  return (
    <Col md={9}>
      <div className="right-area px-4 py-3">
        <h2 className="mb-4">Hello Sazzad!</h2>
        <p>
          From your account dashboard, you can easily check and view your added places, videos and gallery images.
          Also can edit and delete them.
        </p>

        {/* table */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        {/* form */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form>

      </div>
    </Col>
  )
}
