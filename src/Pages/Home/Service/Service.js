import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className='col-md-12 col-lg-4 '>
            <Card className='p-4' style={{ width: '18rem' }}>
                <Card.Img className='w-25 mx-auto' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;