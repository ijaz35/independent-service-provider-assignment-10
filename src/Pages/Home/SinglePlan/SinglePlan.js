import React from 'react';
import { Card } from 'react-bootstrap';
import SingleCriteria from '../SingleCriteria/SingleCriteria';
import './SinglePlan.css'

const SinglePlan = ({ plan }) => {
    const { name, criteria, price, img } = plan;
    return (
        <div className='plan-card-container col-md-12 col-lg-4'>
            <Card className='plan-card py-5 px-4' style={{ width: '25rem' }}>
                <Card.Text className='fs-4'>{name}</Card.Text>
                <Card.Img className='w-25 my-5 mx-auto' variant="top" src={img} />

                <Card.Body>

                    <Card.Title className='fs-1 fw-bolder plan-pricing mb-5'>$ {price}</Card.Title>
                    <hr className='w-75 mx-auto' />
                    <div className='p-5'>
                        {
                            criteria.map(singleCriteria => <SingleCriteria

                                key={singleCriteria}
                                singleCriteria={singleCriteria}
                            ></SingleCriteria>

                            )
                        }
                    </div>

                    <button className='plan-btn mt-5'>GET STARTED</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePlan;