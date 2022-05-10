import React from 'react';
import Appointment from './Appointment';
import Blog from './Blog';
import HeroSection from './HeroSection';
import Info from './Info';
import Services from './Services';
import Testomonial from './Testomonial';

const Home = () => {
    return (
        <div className='px-5 md:px-12'>
            <HeroSection/>
            <Info/>
            <Services/>
            <Blog/>
            <Appointment/>
            <Testomonial/>
        </div>
    );
};

export default Home;