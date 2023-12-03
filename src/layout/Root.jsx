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




git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sabbir1257/responsive-nav-and-footer.git
git push -u origin main