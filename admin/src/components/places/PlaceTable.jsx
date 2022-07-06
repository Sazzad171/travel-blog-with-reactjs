import React from 'react';
import { Table } from "react-bootstrap";

export default function PlaceTable({ places }) {
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
            <td>{ place.description.substring(0, 20) }</td>
            <td><span className="text-danger">Delete</span></td>
          </tr>
        )) }
      </tbody>
    </Table>
  )
}
