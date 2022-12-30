import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SpecialItem.css'

const SpecialItem = ({ specialItem }) => {
    const { name, description, img } = specialItem;
    return (
        <div className='col-md-12 col-lg-4 '>
            <Card className='p-2' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='mt-4'>{name}</Card.Title>
                    <Card.Text className='my-3'>
                        {description}
                    </Card.Text>
                    <Button className='read-btn mt-4'>Read more</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SpecialItem;