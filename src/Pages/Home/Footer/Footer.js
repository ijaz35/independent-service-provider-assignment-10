import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer-container container py-5'>
            <div className="row">
                <div className="col-12 col-md-3">
                    <h6>ABOUT</h6>
                    <ul>
                        <li>SERVICES</li>
                        <li>OUR SHOP</li>
                        <li>JOB OPPORTUNITIES</li>
                        <li>CALENDAR OF EVENTS</li>
                        <li>LOCATION</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <h6>ADDITIONAL LINKS</h6>
                    <ul>
                        <li>ABOUT US</li>
                        <li>TERMS AND CONDITIONS</li>
                        <li>PRIVACY POLICY</li>
                        <li>NEWS</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div className="col-12 col-md-2">
                    <h6>CATEGORIES</h6>
                    <ul>
                        <li>Engagements</li>
                        <li>Honeymoon</li>
                        <li>Inspiration</li>
                        <li>Planning</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <div className='w-75'>
                        <h6>WEDDING PLANNER</h6>
                        <p><small>
                            Making a positive first impression is essential to developing a strong customer relationship. Ekko is powerful enough to assist any small businesses.
                        </small>
                        </p>
                        <div className='d-flex justify-content-evenly mt-5 '>
                            <FontAwesomeIcon className='social-icon' icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon className='social-icon' icon={faTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon className='social-icon' icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon className='social-icon' icon={faPinterest}></FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='w-25 mx-auto text-muted'>WEDDING PLANNER &#169; {year}</p>
        </div>
    );
};

export default Footer;