import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css'

const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement;
    if (loading || loading1 || loading2) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    if (error || error1 || error2) {
        errorElement = <p>{error1?.message}
            {error2?.message}
        </p>
    }
    if (user || user1 || user2) {
        /*  console.log(user)
         console.log(user1)
         console.log(user2) */
        navigate(from, { replace: true })
    }

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
            {errorElement}
        </div>
    );
};

export default SocialLogIn;