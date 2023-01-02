import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className='col-md-12 col-lg-4 '>
            <Card className='service-card p-4 ' style={{ width: '20rem' }}>
                <Card.Img className='w-50 mx-auto mt-2' variant="top" src={img} />
                <Card.Body className='mt-4 pt-3' >
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