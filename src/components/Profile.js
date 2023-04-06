import React, { useEffect, useState } from 'react';
import Createpost from './Posts/Createpost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../profile.css'
import UserPost from './Posts/UserPost';
import Profilecard from './Posts/Profilecard'
import axios from 'axios';

export default function Profile(props) {
  const [updateUser, setupdateUser] = useState([]);
  const [id, setId] = useState('');
  const [pic, setpic] = useState('');
  const [bio, setbio] = useState('');
  const [dob, setdob] = useState('');
  const [name, setname] = useState('');
  const [userData, setUserData] = useState([]);

  const addUsers = async () => {
    const datafromAuth = {
      userFullName: props.user.name,
      email: props.user.email
    }
    const axiosData = await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}addUsers`, datafromAuth);
    const data = axiosData.data;
    setUserData(data);
    setId(data[0].userid);
    setpic(data[0].imageurl);
    setbio(data[0].bio);
    setdob(data[0].dateofbirth);
    setname(data[0].userfullname);
  }

  useEffect(() => {
    addUsers();
  }, [userData, updateUser])

  return (
    <div className='profilebg'>
      <Row className='mx-4'>
        <Col xs={4}>

          <Profilecard updateddata2={props.updateddata2} updateddata={props.updateddata} pic={pic} bio={bio} dob={dob} name={name} id={id} setUserData={setUserData} setupdateUser={setupdateUser} />
        </Col>
        <Col xs={8}>

          <br />
          <Createpost pic={pic} id={id} />
          <UserPost id={id} />
        </Col>

      </Row>
    </div>
  )
}