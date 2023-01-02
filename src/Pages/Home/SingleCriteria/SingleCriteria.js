import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleCriteria = ({ singleCriteria }) => {
    return (
        <div className='plan d-flex align-items-center justify-content-between my-3'>
            <p>{singleCriteria}</p>
            <FontAwesomeIcon
                className='fw-bold'
                style={{ color: 'rgb(194,160,112' }}
                icon={faCheck}
            ></FontAwesomeIcon>
        </div>
    );
};

export default SingleCriteria;