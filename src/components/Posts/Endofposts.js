import React from 'react';
import { Card } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
import image from '../../assets/cover.jpg';

export default function Endofposts() {
    return (

        <Card className='my-4'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6}>End of posts</Placeholder.Button>
            </Card.Body>
        </Card>
    )
}