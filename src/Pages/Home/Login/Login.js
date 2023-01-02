import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../../images/login.jpg'
import SocialLogIn from '../../SocialLogIn/SocialLogIn';
import './Login.css'

const Login = () => {
    const [registered, setRegistered] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleRegister = event => {
        setRegistered(event.target.checked);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            console.log('not validate')
        }
        setValidated(true);
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
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Please enter your name.
                                    </Form.Control.Feedback>
                                </Form.Group>}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-start ps-2 w-100'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                    <Form.Text className="text-muted w-100 text-start d-block ps-2">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Please enter a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-start ps-2 w-100'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                    {registered && <button className='btn btn-link text-end w-100 mt-2'>Forget Password</button>}
                                    <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                        Enter your password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {!registered && <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Label className='text-start ps-2 w-100'>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" required />
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
                                <Button className='submit-btn  w-100 mt-2' variant="primary" type="submit">
                                    {registered ? 'Login' : 'Register'}
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;