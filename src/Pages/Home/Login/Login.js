import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../../images/login.jpg'
import SocialLogIn from '../../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [registered, setRegistered] = useState(false);
    const [validated, setValidated] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        error2,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    if (loading || updating) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    if (user || user1) {
        /*  console.log(user)
         console.log(user1) */
        navigate(from, { replace: true })
    }

    if (error || error1 || error2) {
        errorElement = <p>
            {error?.message}
            {error1?.message}
            {error2?.message}
        </p>
    }
    const handleRegister = event => {
        setRegistered(event.target.checked);
    }



    const handleFormSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            // console.log('not validate')
        }
        setValidated(true);

        const name = event?.target?.name?.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event?.target?.confirmPassword?.value;
        console.log(name, email, password, confirmPassword);

        if (!registered) {
            if (password === confirmPassword) {
                await createUserWithEmailAndPassword(email, password);
                await updateProfile({ displayName: name })
            } else {
                alert('Passwords do not match')
            }
        } else {
            await signInWithEmailAndPassword(email, password);
        }
    }

    const resetPassword = async event => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password rest email sent');
        } else {
            alert('Please enter your email')
        }
    }

    return (
        <div className='container  my-5 py-5 '>
            <div className="social-container row mx-auto">
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <SocialLogIn></SocialLogIn>
                        </div>
                        <hr className='w-75 mx-auto mt-4' />
                        <div className="col-12">
                            <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='w-75 mx-auto mt-4'>
                                {!registered && <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label className='text-start ps-2 w-100'>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter your name" required />
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Please enter your name.
                                    </Form.Control.Feedback>
                                </Form.Group>}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-start ps-2 w-100'>Email address</Form.Label>
                                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                                    <Form.Text className="text-muted w-100 text-start d-block ps-2">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Please enter a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-start ps-2 w-100'>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                    {registered && <button onClick={resetPassword} className='btn btn-link text-end w-100 mt-2'>Forget Password</button>}
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Enter your password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {!registered && <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Label className='text-start ps-2 w-100'>Confirm Password</Form.Label>
                                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Please enter your password again.
                                    </Form.Control.Feedback>
                                </Form.Group>}
                                <Form.Group className="text-left mb-3 mt-2" controlId="formBasicCheckbox">
                                    <div className='w-100 d-flex align-items-center justify-content-start'>
                                        <Form.Check onChange={handleRegister} className="text-left me-2" type="checkbox" />
                                        <p className="text-left mb-0">Already have an account</p>

                                    </div>


                                </Form.Group>
                                <span className='text-danger'>{errorElement}</span>
                                <Button className='submit-btn  w-100 mt-2' variant="primary" type="submit">
                                    {registered ? 'Login' : 'Register'}
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;