import React from 'react';
import muiimage from '../../assets/mui-logo.png';
import bsimage from '../../assets/Bootstrap_logo.png';
import reactimage from '../../assets/React.png';
import nodeimage from '../../assets/node.png';

function SecondCol() {
    return (
        <div className='secondcol'>
            <div className='first'>
                <h3>Welcome to Blog Post</h3>
                <p>Blog Post is a social media platform where users can create and share posts on various topics,
                    engage in discussions and connect with others. The platform aims to foster a supportive community
                    where people can express themselves freely and showcase their creativity.</p>
                <h3>Libraries used:</h3>
            </div>
            <div className='second'>
                <div>
                    <img src={muiimage} alt='' />
                    <img src={bsimage} alt='' />
                </div>
                <div>
                    <img src={reactimage} alt='' />
                    <img src={nodeimage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default SecondCol