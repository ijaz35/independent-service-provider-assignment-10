import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLogin.css'

const SocialLogIn = () => {
    return (
        <div className='d-flex flex-column w-75 mx-auto'>
            <button className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                <span className='social-label'>Sign in with google</span>
            </button>
            <button className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <span className='social-label'>Sign in with facebook</span>
            </button>
            <button className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <span className='social-label'>Sign in with github</span>
            </button>
        </div>
    );
};

export default SocialLogIn;