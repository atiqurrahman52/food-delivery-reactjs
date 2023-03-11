import React from 'react';
import AboutBanner from '../components/about/AboutBanner';
import AboutCompany from '../components/about/AboutCompany';
import NewsLetter from '../components/about/NewsLetter';
import Testimonial from '../components/about/Testimonial';

const About = () => {
    return (
        <div>
           <AboutBanner />
           <AboutCompany />
           <Testimonial />
           <NewsLetter />
        </div>
    );
};

export default About;