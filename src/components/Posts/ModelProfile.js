import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ModalProfile(props) {

 const thedate = props.dob.substring(0,10);
  const updatePro = async (e) => {
    e.preventDefault();
    let obj = {
      userFullName: e.target.Name.value,
      dateOfBirth: e.target.Dob.value,
      imageURL: e.target.Img.value,
      bio: e.target.Bio.value
    }

    const serverURl = `${process.env.REACT_APP_Backend_Deploy_link}updateprofil/${props.id}`
    const axiosRes = await axios.put(serverURl, obj);
    const newUser = axiosRes.data;
    props.updateddata(e.target.Img.value);
    props.updateddata2(e.target.Name.value);
    props.setupdateUser(newUser);
    props.handleClose();
  }

  useEffect(() => {

  }, [])

  return (

    <Modal show={props.showFlag}>
      <div className="mx-3 my-3">
        <Modal.Header closeButton onHide={props.handleClose}>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>

        <Form onSubmit={updatePro}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="Name" defaultValue={props.name} />
            <Form.Label>image URl</Form.Label>
            <Form.Control type="text" placeholder="Image" name="Img" defaultValue={props.pic} />
            <Form.Label>Bio</Form.Label>
            <Form.Control type="text" placeholder="BIO" name="Bio" defaultValue={props.bio} />
            <Form.Label>Birth date</Form.Label>
            <input defaultValue={props.slicedArray} name="Dob" className="form-control" type="date" data-date-format="MM DD YYYY" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export default ModalProfile;
