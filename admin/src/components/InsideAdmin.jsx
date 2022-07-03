import React from 'react';
// bootstarp
import { Container, Row } from "react-bootstrap";

// components
import AdminLeft from './AdminLeft';
import AdminRight from './AdminRight';

export default function InsideAdmin() {
  return (
    <Container>
      <Row>
        {/* left side */}
        <AdminLeft />

        {/* right side */}
        <AdminRight />
      </Row>
    </Container>
  )
}
