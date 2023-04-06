import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselInMain() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='carouselformain1'>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className='carouselformain2'></div>
            </Carousel.Item>
        </Carousel>
    )
}