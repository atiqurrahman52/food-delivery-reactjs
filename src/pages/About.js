import React from 'react';
import AboutBanner from '../components/about/AboutBanner';
import AboutCompany from '../components/about/AboutCompany';
import NewsLetter from '../components/about/NewsLetter';
import OurOutlets from '../components/about/OurOutlets';
import OurTeam from '../components/about/OurTeam';
import Testimonial from '../components/about/Testimonial';

const About = () => {
    return (
        <div>
           <AboutBanner />
           <AboutCompany />
           <OurTeam />
           <Testimonial />
           {/* <OurOutlets /> */}
           <NewsLetter />
        </div>
    );
};

export default About;