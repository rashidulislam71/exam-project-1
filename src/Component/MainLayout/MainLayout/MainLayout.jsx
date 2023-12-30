import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';

const MainLayout = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;