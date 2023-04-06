import React, { useEffect, useState } from 'react'
import Home from './Home'
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import Header from './Headerandfooter/Header';
import Footer from './Headerandfooter/Footer';
import Profile from './Profile';
import PostByID from './Posts/PostByID';
import About from '../components/AboutUs/About';
import '../App.css'

function Switcher(props) {
    const { user } = useAuth0();

    const [updatedimage, setupdatedimage] = useState('');
    const [updatedname, setupdatedname] = useState('');

    const updateddata = async (e) => {
        setupdatedimage(e);
    }

    const updateddata2 = async (e) => {
        setupdatedname(e);
    }

    const Wrapper = ({ children }) => (
        <>
            <Header updatedname={updatedname} updatedimage={updatedimage} user={user} className={props.scrollPosition === 0 ? '' : 'scrolledinpage'} />
            {children}
            <Footer className='footer'/>
        </>
    );


    return (
        <main>
            <Routes>
                <Route path="/" element={(
                    <Wrapper>
                        <Home  user={user} />
                    </Wrapper>
                )} />
                <Route path="/profile" element={(
                    <Wrapper>
                        <Profile updateddata2={updateddata2} updateddata={updateddata}  user={user} />
                    </Wrapper>
                )} />

                <Route path="/about" element={(
                    <Wrapper>
                        <About />
                    </Wrapper>
                )} />
                <Route path="/postinfo/:id" element={(
                    <Wrapper>
                        <PostByID  />
                    </Wrapper>
                )} />
            </Routes>
        </main>
    )
}

export default Switcher