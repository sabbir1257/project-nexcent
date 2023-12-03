import React from 'react';
import clients1 from '../../assets/clinets1.png';
import clients2 from '../../assets/clients2.png';
import clients3 from '../../assets/clients3.png';
import clients4 from '../../assets/clients4.png';
import clients5 from '../../assets/clients5.png';
import clients6 from '../../assets/clients6.png';
import clients7 from '../../assets/clients7.png';
const OurClients = () => {
    return (
        <div className='text-center'>
            <div className='my-5'>
                <h1 className='mb-3 text-[36px] font-semibold'>Our Clients</h1>
                <p className='text-[#717171] px-2'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='md:mt-[50px] md:mb-[74px] mb-5 w-full grid md:grid-cols-7 place-items-center'>
                <img className='py-3' src={clients1} alt="" />
                <img src={clients2} alt="" />
                <img className='py-3' src={clients3} alt="" />
                <img src={clients4} alt="" />
                <img className='py-3' src={clients5} alt="" />
                <img src={clients6} alt="" />
                <img className='pt-3' src={clients7} alt="" />
            </div>
        </div>
    );
};

export default OurClients;