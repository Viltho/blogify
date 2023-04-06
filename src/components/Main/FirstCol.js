import React from 'react';
import image from '../../assets/default-s.png';
import ltucimage from '../../assets/LTUC-Logo.png';
import CarouselInMain from './CarouselInMain';


function FirstCol() {
    return (
        <div className='firstcol'>
            <div className='item1'>
                <img className='webimg' src={image} alt='' />
                <img className='webimg' src={ltucimage} alt='' />
                <br></br>
                <h2>Special thanks to:</h2>
            </div>
            <div className='item2' >
                <CarouselInMain />
            </div>
        </div>
    )
}

export default FirstCol