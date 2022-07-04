import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, } from "react-bootstrap";

// icons
import { BiHomeAlt, BiBeenHere, BiMoviePlay, BiImageAlt, BiLogOut } from 'react-icons/bi';

export default function LeftSideBar() {

  // state
  const [menuItem, setMenuItem] = useState([
    {
      id: 1,
      link: '/dashboard',
      activeStatus: true,
      name: "Dashboard"
    },
    {
      id: 2,
      link: '/places',
      activeStatus: false,
      name: "Places"
    },
    {
      id: 3,
      link: '/videos',
      activeStatus: false,
      name: "Videos"
    },
    {
      id: 4,
      link: '/gallery',
      activeStatus: false,
      name: "Gallery"
    },
    {
      id: 5,
      link: '/',
      activeStatus: false,
      name: "Logout"
    }
  ])

  return (
    <Col md={3} className='mb-md-0 mb-3'>
      <ListGroup className="left-menu">

        {menuItem && menuItem.map(item => (
          <ListGroup.Item className={ item.activeStatus ? "active" : "" } key={ item.id }>
            <Link to={ item.link }>
              <BiHomeAlt className="me-2" /> { item.name }
            </Link>
          </ListGroup.Item>
        ))}

      <ListGroup.Item>
          <Link to="/places">
            <BiBeenHere className="me-2" /> Places
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/videos">
            <BiMoviePlay className="me-2" /> Videos
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/gallery">
            <BiImageAlt className="me-2" /> Gallery
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/">
            <BiLogOut className="me-2" /> Logout
          </Link>
        </ListGroup.Item>
        
      </ListGroup>
    </Col>
  )
}
