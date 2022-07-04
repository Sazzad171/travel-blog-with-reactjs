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
      activeStatus: false,
      name: "Dashboard",
      icon: <BiHomeAlt className='me-2' />
    },
    {
      id: 2,
      link: '/places',
      activeStatus: false,
      name: "Places",
      icon: <BiBeenHere className='me-2' />
    },
    {
      id: 3,
      link: '/videos',
      activeStatus: false,
      name: "Videos",
      icon: <BiMoviePlay className='me-2' />
    },
    {
      id: 4,
      link: '/gallery',
      activeStatus: false,
      name: "Gallery",
      icon: <BiImageAlt className='me-2' />
    },
    {
      id: 5,
      link: '/',
      activeStatus: false,
      name: "Logout",
      icon: <BiLogOut className='me-2' />
    }
  ]);

  // handle active status
  const handleActiveStatus = (id) => {
    setMenuItem(
      menuItem.map((item => 
        item.id === id ? {...item, activeStatus: true} : item
      ))
    );
  }

  return (
    <Col md={3} className='mb-md-0 mb-3'>
      <ListGroup className="left-menu">

        {menuItem && menuItem.map(item => (
          <ListGroup.Item className={ item.activeStatus ? "active" : "" } key={ item.id } 
            onClick={() => handleActiveStatus(item.id)} >
            <Link to={ item.link }>
              {item.icon} { item.name }
            </Link>
          </ListGroup.Item>
        ))}
        
      </ListGroup>
    </Col>
  )
}
