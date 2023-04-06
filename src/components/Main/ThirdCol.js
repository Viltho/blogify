import * as React from 'react';
import Card from '@mui/material/Card';

export default function ThirdCol() {
    return (
        <>
            <h2>Main characters:</h2>
            <div className='row1'>
                <Card className='cardinthird'>
                    <img
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="A meow in ltuc"
                    />
                    <p>Abdullah</p>
                </Card>
                <Card className='cardinthird'>
                    <img
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="A meow in ltuc"
                    />
                    <p>Mohammad</p>
                </Card>
            </div>
            <div className='row2'>
                <Card className='cardinthird'>
                    <img
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="A meow in ltuc"
                    />
                    <p>Doha</p>
                </Card>
                <Card className='cardinthird'>
                    <img
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="A meow in ltuc"
                    />
                    <p>Jana</p>
                </Card>
            </div>
            <div className='row3'>
                <Card className='cardinthird'>
                    <img
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="A meow in ltuc"
                    />
                    <p>Rami</p>
                </Card>
                <Card className='cardinthird'>
                    <img
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="A meow in ltuc"
                    />
                    <p>Husam</p>
                </Card>
            </div>
        </>
    );
}