import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className='getInTouch-container position-relative'>

            <div className='touch-dark-overlay  w-100 h-100 mx-auto position-absolute'>
                <div className="container row mx-auto h-100">
                    <div className="col-lg-4 my-auto">
                        <h1 className='h1'>By your side every step of the way.</h1>
                        <p className='my-4'>Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Ut consequat semper viverra nam libero justo laoreet.</p>
                        <button className='touch-btn mt-4'>GET IN TOUCH</button>
                    </div>
                    <div className="col-lg-8 pe-5" >
                        <div className='my-auto h-100 d-flex align-items-center justify-content-end pe-5 me-5'>
                            <button className="play-btn me-5 d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon
                                    icon={faPlay}
                                ></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetInTouch;