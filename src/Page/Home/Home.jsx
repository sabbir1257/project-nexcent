import React from 'react';
import Banner from '../../Components/Homes/Banner';
import OurClients from '../../Components/Homes/OurClients';
import Manage from '../../Components/Homes/Manage';
import Unseen from '../../Components/Homes/Unseen';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurClients />
            <Manage />
            <Unseen />
        </div>
    );
};

export default Home;