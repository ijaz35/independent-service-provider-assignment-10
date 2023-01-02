import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='dark-overlay position-absolute top-0 w-100 h-100'>
                <div className="banner-info w-50 mx-auto">
                    <h1 className='my-5 fw-lighter'>Wedding Planner</h1>
                    <p className='w-75 mx-auto lh-lg mb-4'>Whether it's an intimate wedding or an extravagant celebration,
                        all couples deserve the same attention to detail and care for their wedding day.</p>
                    <button className='btn-purchase '>Purchase us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;