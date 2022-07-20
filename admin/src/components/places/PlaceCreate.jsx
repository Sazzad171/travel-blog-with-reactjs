import React, { useState, useEffect } from 'react';
import { Form, Modal, Button } from "react-bootstrap";
// for file upload
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../firebase/firebase';
import { addDoc, collection, getDoc, doc, updateDoc } from 'firebase/firestore';

// initial object value
const initialValue = {
  name: '',
  location: '',
  description: ''
}

export default function PlaceCreate({ addEditPlaceModal, setAddEditPlaceModal, addModal, setAddModal, editId, setEditId }) {

  // close modal
  const handleClose = () => {
    setAddEditPlaceModal(false);
    setAddModal(true);
    setEditId(null);
  }


  // state for form upload
  const [data, setData] = useState(initialValue);
  const [img, setImg] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  // destruct data value
  const {name, location, description} = data;


  // input field handle change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  useEffect(() => {
    // img file upload
    const uploadImg = () => {
      // const name = new Date().getTime() + img.name;
      const storageRef = ref(storage, img.name);
      const uploadTask = uploadBytesResumable(storageRef, img);

      // track upload status
      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          if ( progress === 100 ) setProgress(null);
          switch (snapshot.state) {
            case "paused":
              console.log("pause");
              break;
            case "running":
              console.log("running");
              break;
            default:
              break;
          }
      }, (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({ ...prev, img: downloadURL }));
        })
      });
    };

    img && uploadImg();

  }, [img]);


  // update edit info when click edit
  useEffect(() => {
    if (editId !== null) {
      let getSingleUser = async () => {
        const docRef = doc(db, "places", editId);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setData({ ...snapshot.data() });
        }
      }
      getSingleUser();
    }
  }, [editId]);


  // submit form and upload all info to firebase
  const submitForm = async () => {
    if (data.name !== '' && data.location !== '' && data.description !== '' && img !== '') {

      // check if add modal or edit modal
      if (addModal) {
        await addDoc(collection(db, "places"), data);
      }
      // update edited data
      else {
        try {
          await updateDoc(doc(db, "places", editId), data);
        }
        catch(err) {
          console.log(err);
        }

        setEditId(null);
      }

      setAddEditPlaceModal(false);
      setAddModal(true);
    }
    else setError("Please fillup all fields!");
  }

  return (
  <Modal show={addEditPlaceModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{ addModal ? "Add new place" : "Edit place" }</Modal.Title>
      </Modal.Header>
      <div className="modal-body">
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Place Name</Form.Label>
            <Form.Control type="text" name="name" value={name} onChange={handleChange} placeholder="Enter place name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Place location</Form.Label>
            <Form.Control type="text" name="location" value={location} onChange={handleChange} placeholder="Enter place location" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Place Description</Form.Label>
            <Form.Control type="text" name="description" value={description} onChange={handleChange} placeholder="Enter place description" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="img">
            <Form.Label>Place image</Form.Label>
            <Form.Control type="file" name="img" onChange={(e) => setImg(e.target.files[0])} placeholder="Select image file" required />
            {
              progress !== null && <p><small>Img is uploading. Please Wait!</small></p>
            }
          </Form.Group>
        </Form>
        { error && <p className="text-danger">{error}</p> }
      </div>
      <Modal.Footer>
        <Button className='btn bg-danger btn-danger' onClick={handleClose}>
          Close
        </Button>
        <Button className={`btn bg-success btn-success ${progress !== null ? 'disabled' : ''}`} onClick={submitForm}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
