import React from 'react';

// bootstarp
import { Container, Row } from "react-bootstrap";

// components
import LeftSidebar from './LeftSidebar';
import Index from './gallery/Index';

export default function Gallery({ gallery }) {
  return (
    <Container>
      <Row>
        {/* left side */}
        <LeftSidebar />

        {/* right side */}
        <Index gallery={ gallery } />
      </Row>
    </Container>
  )
}
