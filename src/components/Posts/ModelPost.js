import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react'
function ModalProfile(props) {

    const [newTitle, setNewTitle] = useState('');
    const [newImageURL, setNewImageURL] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleSave = async () => {
        const obj = {
            title: newTitle,
            imageURL: newImageURL,
            content: newContent
        };
        setNewTitle('')
        setNewImageURL('')
        setNewContent('')
        props.handleEditPost(obj);
        props.handleClose();
    };

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleImageURLChange = (event) => {
        setNewImageURL(event.target.value);
    };

    const handleContentChange = (event) => {
        setNewContent(event.target.value);
    };




    return (
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" defaultValue={props.post.title} onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image URl</Form.Label>
                        <Form.Control name="image" type="text" defaultValue={props.post.imageurl} onChange={handleImageURLChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={9} name="content" type="text" defaultValue={props.post.content} onChange={handleContentChange} />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalProfile;