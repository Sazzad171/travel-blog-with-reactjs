import React from 'react';
import { Link } from 'react-router-dom';
// bootstrap
import { Col, Container, Row, Form, Card } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={5}>
          <Card className='shadow-sm'>
            <Card.Body className='p-md-4'>
              <h4 className="text-center mb-4">Login to Nature Lovers BD</h4>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <button className="btn btn-success disabled w-100" type='submit'>Submit</button>
              </Form>

              <p className='mt-4'>
                <Link to="/signup" className='text-primary'>Don't have Account? <b>Signup here</b></Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
