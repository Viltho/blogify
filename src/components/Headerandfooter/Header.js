import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/Blogify.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Header(props) {
  const { user, isAuthenticated, loginWithRedirect, isLoading, logout, error } = useAuth0();

  const [name, setname] = useState('');
  const [image, setimage] = useState('');

  const addUsers = async () => {
    const datafromAuth = {
      userFullName: user.name,
      email: user.email
    }

    const axiosData = await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}addUsers`, datafromAuth);
    const data = axiosData.data;
    setname(data[0].userfullname);
    setimage(data[0].imageurl);
  }

  useEffect((e) => {
    console.log(image);
    addUsers(e);
  }, [])

  return (
    <header className='header'  >
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="/">
            <Image src={logo} width="150" height="40" className="d-inline-block align-top" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav style={{ marginLeft: '300px' }}>
              <Nav.Link className='linkinheader' href="/">Home</Nav.Link>
              {isAuthenticated && !isLoading ? <Nav.Link className='linkinheader' href="/profile">Profile</Nav.Link> : ""}
              <Nav.Link className='linkinheader' href="/about">About US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {isAuthenticated && !isLoading ? <span className="me-3">Hello {props.updatedname? props.updatedname : name}</span> : ""}
            {isAuthenticated && !isLoading ? <Image className='imageinheaderforuser' src={props.updatedimage? props.updatedimage : image} alt="" /> : ""}
            {isAuthenticated && !isLoading && !error ? <Button onClick={() => logout()} variant="contained">Logout</Button> : <Button onClick={() => loginWithRedirect()} variant="contained">Login/Signup</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

