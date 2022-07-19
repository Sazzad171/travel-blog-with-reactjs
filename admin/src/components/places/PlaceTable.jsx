import React from 'react';
import { useEffect } from 'react';
import { Table } from "react-bootstrap";

// icons
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

export default function PlaceTable({ places, setEditPlaceModal }) {

  // edit modal show
  const editModalHandle = (e) => {
    e.preventDefault();
    setEditPlaceModal(true);
  }

  useEffect(() => {
    console.log(places);
  });

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Img</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { places && places.map((place) => (
          <tr key={place.id}>
            <td>{ place.id }</td>
            <td>{ place.name }</td>
            <td>{ place.location }</td>
            <td><img src={ place.img } alt="place img" width="100" height="auto" /></td>
            <td>{ place.description }</td>
            <td>
              <a href="#edit" onClick={editModalHandle}>
                <AiFillEdit className='text-warning me-3' />
              </a>
              <a href="#delete">
                <AiOutlineDelete className='text-danger' />
              </a>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  )
}
