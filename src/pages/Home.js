import React from 'react';
import Articles from '../components/home/Articles';
import CustomerFavorites from '../components/home/CustomerFavorites';

const Home = () => {
    return (
        <div>
            <CustomerFavorites />
            <Articles />
        </div>
    );
};

export default Home;