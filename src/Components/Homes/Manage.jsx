import React from 'react';
import manage1 from '../../assets/manage1.png'
import manage2 from '../../assets/manage2.png'
import manage3 from '../../assets/manage3.png'
const Manage = () => {
    return (
        <div>
            <div className='text-center' >
                <h1 className='mb-3 text-[36px] font-semibold'>Manage your entire community <br /> in a single system</h1>
                <p className='text-[#717171]'>Who is Nextcent suitable for?</p>
            </div>
            
            <div className='grid my-6 text-center md:grid-cols-3 place-items-center '>
                <div className='md:w-[50%] border m-4 p-5 rounded'>
                    <img className='mx-auto' src={manage2} alt="" />
                    <h2 className='text-[28px] font-normal mb-3'>Membership Organisations</h2>
                    <p className='text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div  className='md:w-[50%] border m-4 p-5 rounded'>
                    <img className='mx-auto' src={manage1} alt="" />
                    <h2 className='text-[28px] font-normal mb-3'>Membership Organisations</h2>
                    <p className='text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='md:w-[50%] border m-4 p-5 rounded'>
                    <img className='mx-auto' src={manage3} alt="" />
                    <h2 className='text-[28px] font-normal mb-3'>Membership Organisations</h2>
                    <p className='text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    );
};

export default Manage;