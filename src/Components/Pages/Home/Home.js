import React from 'react';
import Appointment from './Appointment';
import Blog from './Blog';
import ConnectUs from './ConnectUs';
import HeroSection from './HeroSection';
import Info from './Info';
import Services from './Services';
import Testomonial from './Testomonial';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Info/>
            <Services/>
            <Blog/>
            <Appointment/>
            <Testomonial/>
            <ConnectUs/>
        </div>
    );
};

export default Home;