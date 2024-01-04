import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';

const MainLayout = () => {
    return (
        <div>
            <Navigation />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;