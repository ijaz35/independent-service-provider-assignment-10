import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from '../Testimonial/Testimonial';
import testimonialImg1 from '../../../images/testimonial/testimonial1.jpg'
import testimonialImg2 from '../../../images/testimonial/testimonial2.jpg'

import './Slider.css'

const Slider = () => {
    const testimonials = [
        { id: 1, comment: "We wanted to say a big thank you for all you did to make our wedding the best day of our lives! Everyone should use a wedding planner. Wish you all the best!", name: 'Maya & Samuel', location: 'March 2018 - Houston, TX', img: testimonialImg1 },
        { id: 2, comment: 'We honestly could not have done it without you! We are still talking about it and so are our guests – they say it was the best wedding they have been to! Thank you again!', name: 'Diana & Neal', location: 'July 2018 - Miami, FL', img: testimonialImg2 }
    ]
    return (
        <div className='testimonial-outer-container position-relative'>

            <div className='slider-dark-overlay position-absolute top-0 w-100 h-100'>
                <Carousel showThumbs={false} className=' py-5 row mx-auto'>

                    {
                        testimonials.map(testimonial => <Testimonial className='d-none'
                            key={testimonial.id}
                            testimonial={testimonial}
                        ></Testimonial>)
                    }


                </Carousel>
            </div>
        </div>
    )

}
export default Slider;