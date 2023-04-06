import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import './Profile.css'

function DeleteWarningModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className=''>Warning Deleting Post <FontAwesomeIcon icon={faExclamationCircle} className="mr-2 text-warning" /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this Post?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={props.handleDeletePost}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteWarningModal;