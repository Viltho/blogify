import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Profile.css';
import chat from '../images/Capture-removebg-preview.png'
import axios from 'axios';

function Createpostmodal(props) {

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [show, setShow] = useState(false);

    const target = useRef(null);


    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    const handleAIContent = async (e) => {
        try {
            e.preventDefault();
            const axiosAIContent = await axios.get(`${process.env.REACT_APP_Backend_Deploy_link}generateByAi/?title=${title}`);
            setContent(axiosAIContent.data);
        }
        catch {
        }
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    const newPost = async (e) => {
        try {
            e.preventDefault();
            const dataToSend = {
                userId: props.useridgetter,
                title: title,
                content: content,
                imageURL: image
            }
            await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}addPost`, dataToSend);
            setTitle('');
            setContent('');
            setImage('');
            props.handleClose();
        }
        catch (error) {

        }
    }

    useEffect(() => {

    }, [title, content, image])

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <div className='my-2 mx-2' >
                <Modal.Header closeButton>
                    <Modal.Title>Create post</Modal.Title>
                </Modal.Header>
                <Form onSubmit={newPost}>
                    <FloatingLabel controlId="floatingTextarea2" label="Add a title">
                        <Form.Control
                            onChange={handleTitleChange}
                            name='title'
                            value={title}
                            as="textarea"
                            placeholder="Leave a comment here"
                        />
                    </FloatingLabel>
                    <FloatingLabel className='my-2' controlId="floatingTextarea2" label="">
                        <Form.Control
                            onChange={handleContentChange}
                            name='content'
                            as="textarea"
                            placeholder="Leave a comment here"
                            defaultValue={content}
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel className=' my-2' controlId="floatingTextarea2" label="Add an Image URL">
                        <Form.Control
                            onChange={handleImageChange}
                            name='imageURL'
                            value={image}
                            placeholder="Attach picture URL"
                        />
                    </FloatingLabel >
                    <div className='mx-2 displayflex' >
                        <Button className='mx-2' disabled={!title || !content || !image} value='submitpostbycontent' type='submit' variant="secondary" >Post</Button>
                        <Button className='mx-2 chat-icon' disabled={!title || content || !image} onClick={handleAIContent} value='submitpostbyai' type='submit' variant="secondary" ><img src={chat} width="20px"/>Use AI</Button>
                        <Button ref={target} onClick={() => setShow(!show)}>
                            ChatGPT Tooltip
                        </Button>
                        <Overlay target={target.current} show={show} placement="right">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    How to use (Use AI) button: insert a Title without content to use the GPT4 functionality.
                                </Tooltip>
                            )}
                        </Overlay>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}

export default Createpostmodal