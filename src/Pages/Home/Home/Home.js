import React from 'react';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Inspirations from '../Inspirations/Inspirations';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import SideBar from '../SideBar/SideBar';
import Slider from '../Slider/Slide';
import Special from '../Special/Special';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'


const Home = () => {

    return (
        <div className='home-container '>
            <Header></Header>
            <Banner></Banner>
            <div className='special-top'>
                <Special></Special>
            </div>
            <Services></Services>
            <GetInTouch></GetInTouch>
            <Pricing></Pricing>
            <SideBar></SideBar>
            <Slider></Slider>
            <Inspirations></Inspirations>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;