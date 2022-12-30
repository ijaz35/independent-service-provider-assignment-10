import React from 'react';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
    const { comment, name, location, img } = testimonial;
    return (
        <div className='testimonial-container d-md-flex w-75 mx-auto p-5'>
            <div className="testimonial left w-75  bg-white p-5 border-end  border-danger d-flex flex-column justify-content-center">
                <p className='pt-5'>{comment}</p>
                <p className='mt-5 mb-0 fw-bold'>{name}</p>
                <p>{location}</p>
            </div>
            <div className="testimonial-right  w-50 border-start  border-danger">

                <img className='' src={img} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;