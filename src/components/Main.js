import React from 'react';
import { Button } from '@mui/material';
import FirstCol from './Main/FirstCol';
import SecondCol from './Main/SecondCol';
import ThirdCol from './Main/ThirdCol';

export default function MainPage(props) {

  return (
    <div className='containerinmain'>
      <FirstCol />
      <SecondCol />
      <div className='thirdcol'>
        <ThirdCol />
        <Button onClick={() => props.loginWithRedirect()} variant="contained">Get Started With Blog Post</Button>
      </div>
    </div>
  )
}