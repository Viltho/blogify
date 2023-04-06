import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from 'react';

function ModalProfile(props) {

    const [newContent, setnewContent] = useState(props.comment.content);

    function handleSave() {
        props.handleEditComment(props.comment.commentid, newContent);
        props.handleClose();
    }

    const handleInputChange = (event) => {
        setnewContent(event.target.value);
    };

    return (
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <div className="mx-3 my-3">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Comment</Modal.Title>
                </Modal.Header>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" defaultValue={newContent} onChange={handleInputChange} placeholder="Comment" />
                    </Form.Group>
        
                    <Button variant="primary" onClick={handleSave}>
                        Save changes
                    </Button>
                </Form>
            </div>
        </Modal>
    );
}

export default ModalProfile;