import { faBagShopping, faBookOpen, faClapperboard, faComment, faHeadset, faLaptop, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (

        <div className='sidebar position-fixed '>
            <div className='d-flex flex-column px-1 '>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faComment}></FontAwesomeIcon>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faHeadset}></FontAwesomeIcon>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faBookOpen}></FontAwesomeIcon>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faClapperboard}></FontAwesomeIcon>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faLaptop}></FontAwesomeIcon>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faUserGroup}></FontAwesomeIcon>
                <FontAwesomeIcon className='sidebar-icon px-2 py-3 fw-lighter fs-5' icon={faBagShopping}></FontAwesomeIcon>
            </div>
        </div>

    );
};

export default SideBar;