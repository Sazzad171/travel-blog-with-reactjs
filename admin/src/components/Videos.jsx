import React from 'react';

// bootstarp
import { Container, Row } from "react-bootstrap";

// components
import LeftSidebar from './LeftSidebar';
import Index from './videos/Index';

export default function Videos({ videos }) {
  return (
    <Container>
      <Row>
        {/* left side */}
        <LeftSidebar />

        {/* right side */}
        <Index videos={ videos } />
      </Row>
    </Container>
  )
}
