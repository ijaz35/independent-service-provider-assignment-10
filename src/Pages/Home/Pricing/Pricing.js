import React from 'react';
import plan1 from '../../../images/services/ico1.png';
import plan2 from '../../../images/services/icon2-1.png';
import plan3 from '../../../images/services/icon6-1.png'
import SinglePlan from '../SinglePlan/SinglePlan';
import './Pricing.css'

const Pricing = () => {
    const plans = [
        {
            id: "1",
            name: 'Basic', price: 1500,
            criteria: ['Budget development', 'Venue selection', 'Guest transport', 'Music selection'],
            img: plan1
        },
        {
            id: "2",
            name: 'Essential',
            price: 2500,
            criteria: ['Fashion consulting', 'Event planning', 'Hotel Booking', 'Wedding website'],
            img: plan2
        },
        {
            id: "3",
            name: 'Absolute',
            price: 3500,
            criteria: ['Budget development', 'Venue selection', 'Guest transport', 'Music selection'],
            img: plan3
        }

    ]
    return (
        <div id='plans' className='container my-5 py-4'>
            <h1>Pricing plans and options</h1>
            <p className='my-5 pb-4'>Simple, flexible, and predictable pricing. Choose which package is best suited for you.</p>
            <div style={{ width: '95%' }} className='row  mx-auto'>
                {
                    plans.map(plan => <SinglePlan
                        key={plan.id}
                        plan={plan}
                    ></SinglePlan>)
                }
            </div>
        </div>
    );
};

export default Pricing;