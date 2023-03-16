import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
// import { Outlet } from "react-router-dom";
import Navbar from '../components/navigation/Navbar';
import MobileBottomNav from '../components/shared/MobileBottomNav';

const BasicLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <MobileBottomNav />
            <Footer />
        </div>
    );
};

export default BasicLayout;