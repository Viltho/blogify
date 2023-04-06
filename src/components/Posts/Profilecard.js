import { useState, useEffect } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalProfile from '../Posts/ModelProfile';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';


export default function Profilecard(props) {

  
 const myProp = props.dob;
 const slicedArray = myProp !== null ? myProp.slice(0, 10) : null; 

  const [showFlag, setShowFlag] = useState(false);

  const handleShow = () => {
    setShowFlag(true);
  }
  const handleClose = () => {
    setShowFlag(false);
  }

  useEffect(() => {

  }, []);

  return (
    <div className="my-4">
      <div className="cardinprofilec">
        <div className="cover-photo-pc ">
          <img
            component='img'
            alt='green iguana'
            height='140'
            src={props.pic}
            className="profile-pc "
          />
        </div>
       
        <h3 className="profile-name-pc cardtitle"> {props.name}</h3>
       <div className="about-pc">
        <p> Bio : <span>{props.bio}</span> </p>
        <p> Date of birth : <span> {slicedArray} </span> </p>
        </div>
        <CardActions>
          <Button size='small' className='cardedit' onClick={handleShow}>
            <FontAwesomeIcon icon={faUserPen} />
          </Button>
        </CardActions>

        <ModalProfile slicedArray={slicedArray} updateddata2={props.updateddata2} updateddata={props.updateddata} pic={props.pic} bio={props.bio} dob={props.dob} name={props.name} id={props.id} showFlag={showFlag} handleClose={handleClose} setupdateUser={props.setupdateUser} />
      </div>
    </div>
  );
}