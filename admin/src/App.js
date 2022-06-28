import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Col, Container, Row, ListGroup, Table, Form } from "react-bootstrap";

// firebase
// import { db } from "./firebase/firebase";
// import { collection, onSnapshot } from 'firebase/firestore';

// import components
import Header from './layout/Header';
import Footer from './layout/Footer';

// icons
import { BiHomeAlt, BiBeenHere, BiMoviePlay, BiImageAlt, BiLogOut } from 'react-icons/bi';

function App() {

  // states
  

  return (
    <>
      <Header />
      <main className="pt-60 pb-60">
        <Routes>
          {/* <Route path="/" element={<Home places={ places } videos={ videos } gallery={ gallery } />} /> */}
          test
        </Routes>

        {/* home */}
        <Container>
          <Row>
            {/* left side */}
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

            {/* right side */}
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
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
