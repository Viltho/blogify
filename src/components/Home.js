import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import News from './ApiComponents/News';
import Post from './Posts/Post';
import Createpost from './Posts/Createpost';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../home.css';

export default function Home(props) {

  const { isAuthenticated, isLoading, error } = useAuth0();

  const [id, setId] = useState('');
  const [image, setImage] = useState('');


  const addUsers = async () => {
    const datafromAuth = {
      userFullName: props.user.name,
      email: props.user.email
    }
    const axiosData = await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}addUsers`, datafromAuth);
    const data = axiosData.data;
    setId(data[0].userid)
    setImage(data[0].imageurl)
  }

  useEffect(() => {
    addUsers();
  }, [])

  return (
    <main className='hometheplacewhereibelong'>
      <Row className='mx-4 '>
        <Col xs={2}>
        </Col>
        <Col xs={8}>
          <div className='news'>
            <News />
          </div>
          {isAuthenticated && !isLoading && !error ? <Createpost image={image} id={id} /> : <Alert variant='danger'>
            Welcome Guest! To use our website, you will need to join us. Enjoy your stay 😊
          </Alert>}
          <Post id={id} />
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
    </main>
  )
}