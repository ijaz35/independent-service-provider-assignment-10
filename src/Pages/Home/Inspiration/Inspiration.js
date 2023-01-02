import { faArrowRight, faClock, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Inspiration.css'

const Inspiration = ({ inspiration }) => {
    const { img, name, description, date } = inspiration;
    return (
        <div id='inspirations' className='inspiration-container col-md-12 col-lg-4 '>
            <Card className='inspiration-card' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className='px-4'>
                    <Card.Title className='mt-3 text-start'>{name}</Card.Title>
                    <p className='d-flex align-items-center justify-content-start my-4'>
                        <FontAwesomeIcon className='inspiration-icons' icon={faClock}></FontAwesomeIcon>
                        <span className='text-muted mx-3'>{date}</span>
                        <FontAwesomeIcon className='inspiration-icons' icon={faKeyboard}></FontAwesomeIcon>
                    </p>
                    <p className='text-muted text-start'>
                        <small >
                            {description}
                        </small>

                    </p>
                    <button className='inspiration-btn border-0 me-auto d-block bg-white my-4'>
                        <span className='me-2'>Read more</span>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                        ></FontAwesomeIcon>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inspiration;