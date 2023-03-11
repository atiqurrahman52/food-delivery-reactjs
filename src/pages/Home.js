import React from 'react';
import Articles from '../components/home/Articles';
import Banner from '../components/home/Banner';
import CustomerFavorites from '../components/home/CustomerFavorites';
import DeliveryWorks from '../components/home/DeliveryWorks';

const Home = () => {
    return (
        <div>
            <DeliveryWorks />
            <CustomerFavorites />
            <Banner />
            <Articles />
        </div>
    );
};

export default Home;