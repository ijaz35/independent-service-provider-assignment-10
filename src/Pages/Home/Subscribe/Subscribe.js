import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe-container position-relative'>
            <div className="subscribe-dark-overlay w-100 h-100 position-absolute top-0 start-0">
                <div className='w-50 mx-auto pt-5 mt-5'>
                    <h2 className='sub-title display-5 text-white fw-lighter'>Subscribe our newsletter
                        for occasional updates</h2>
                    <div className='subscribe-input-container py-5 w-100 '>
                        <div className='position-relative'>
                            <input className='subscribe-input  p-3  d-md-inline w-100' type="email" name="" id="" placeholder='Enter your e-mail address' />
                            <input className='subscribe-input  p-3 d-md-inline ' type="submit" value="SUBSCRIBE" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;