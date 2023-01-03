import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SocialLogin.css'

const SocialLogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
        <div className='d-flex flex-column w-75 mx-auto'>
            <button onClick={() => signInWithGoogle()} className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                <span className='social-label'>Sign in with google</span>
            </button>
            <button onClick={() => signInWithFacebook()} className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <span className='social-label'>Sign in with facebook</span>
            </button>
            <button onClick={() => signInWithGithub()} className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <span className='social-label'>Sign in with github</span>
            </button>
        </div>
    );
};

export default SocialLogIn;