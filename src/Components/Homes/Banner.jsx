import React from 'react';
import banner from '../../assets/hero.png'   
const Banner = () => {
    return (
        <div className='items-center justify-between md:flex md:mt-[96px] mt-3 px-4'>
            <div>
                <h1 className=' md:text-[64px]  w-[75%]'><span className='text-[#4d4d4d] '>Lessons and insights</span> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                <p className='text-[#717171]'>Where to grow your business as a photographer: site or social media?</p><br />
                <button className='px-[32px] py-[14px] bg-[#4CAF4F] text-white rounded'>Register</button>
            </div>
            <div className=''>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;