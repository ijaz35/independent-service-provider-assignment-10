import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    return (
        <div className='position-relative w-100'>
            <Navbar className='navbar-container position-absolute top-0 left-0 w-100 py-5' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='text-white' href="#home">Wedding Planner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex align-items-center justify-content-around ms-auto w-75">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#services">Services</Nav.Link>
                            <Nav.Link className='text-white' href="#plans">Plans</Nav.Link>
                            <Nav.Link className='text-white' href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link className='text-white' href="#inspirations">Inspirations</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>

                            {user?.uid ? <div>
                                <span className='me-3 fw-bold text-capitalize text-danger inline-block'>{user?.displayName}</span>

                                <button onClick={() => signOut()} className='btn-signout px-4 py-2 text-white'>Signout</button>
                            </div>
                                :
                                <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;