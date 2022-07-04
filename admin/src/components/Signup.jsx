import React from 'react';
import { Link } from 'react-router-dom';
// boostrap
import { Col, Container, Row, Form, Card } from "react-bootstrap";

export default function Signup() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={5}>
          <Card className='shadow-sm'>
            <Card.Body className='p-md-4'>
              <h4 className="text-center mb-4">Signup to Nature Lovers BD</h4>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>

                <button className="btn btn-success disabled w-100" type='submit'>Submit</button>
              </Form>

              <p className='mt-4'>
                <Link to="/login" className='text-primary'>Already have Account? <b>Login here</b></Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
