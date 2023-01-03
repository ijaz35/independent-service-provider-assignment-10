import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container my-5 py-5'>
            <h1 className='mb-5'>Wedding planning services </h1>
            <p>We always strive to guide and advise our client to the best solutions within the wedding budget.</p>
            <div style={{ width: '85%' }} className='row mx-auto my-5 gy-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;