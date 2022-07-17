import React from 'react';
import { Table } from "react-bootstrap";

// icons
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

export default function VideoTable({ videos, setEditVideoModal }) {

  // edit modal show
  const editModalHandle = (e) => {
    e.preventDefault();
    setEditVideoModal(true);
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Img</th>
          <th>Description</th>
          <th>link</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { videos && videos.map((videoItem) => (
          <tr key={videoItem.id}>
            <td>{ videoItem.id }</td>
            <td>{ videoItem.name }</td>
            <td>{ videoItem.location }</td>
            <td><img src={ videoItem.img } alt="place img" width="100" height="auto" /></td>
            <td><a href={ videoItem.link }>Link</a></td>
            <td>{ videoItem.description.substring(0, 20) }</td>
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
