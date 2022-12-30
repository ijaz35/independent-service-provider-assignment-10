import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Slider from '../Slider/Slide';
import Special from '../Special/Special';
import './Home.css'


const Home = () => {
    return (
        <div className='home-container '>
            <Banner></Banner>
            <div className='special-top'>
                <Special></Special>
            </div>
            <Services></Services>
            <Slider></Slider>
        </div>
    );
};

export default Home;