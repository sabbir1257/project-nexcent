import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../Navbar/Nav';

const Root = () => {
    return (
        <div>
            <Nav />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;