import React from 'react';
import Articles from '../components/home/Articles';
import Banner from '../components/home/Banner';
import CustomerFavorites from '../components/home/CustomerFavorites';
import DeliveryWorks from '../components/home/DeliveryWorks';
import HeroSection from '../components/home/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <DeliveryWorks />
            <CustomerFavorites />
            <Banner />
            <Articles />
        </div>
    );
};

export default Home;