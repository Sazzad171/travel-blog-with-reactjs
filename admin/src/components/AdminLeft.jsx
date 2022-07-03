import React from 'react';
import { Col, ListGroup, } from "react-bootstrap";

// icons
import { BiHomeAlt, BiBeenHere, BiMoviePlay, BiImageAlt, BiLogOut } from 'react-icons/bi';

export default function AdminLeft() {
  return (
    <Col md={3} className='mb-md-0 mb-3'>
      <ListGroup className="left-menu">
        <ListGroup.Item active>
          <a href="#d">
            <BiHomeAlt className="me-2" /> Dashboard
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#d">
            <BiBeenHere className="me-2" /> Places
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#d">
            <BiMoviePlay className="me-2" /> Videos
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#d">
            <BiImageAlt className="me-2" /> Gallery
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#d">
            <BiLogOut className="me-2" /> Logout
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  )
}
