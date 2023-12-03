import React from 'react';
import logo from '../assets/footer-logo.png'
import footer1 from "../assets/footer-1.png"
import footer2 from "../assets/footer-2.png"
import footer3 from "../assets/footer-3.png"
import footer4 from "../assets/footer-4.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-[#263238] md:py-[64px] md:px-[165px] py-6 px-10 mt-4 md:grid grid-cols-7 rounded'>
            <div className='col-span-3'>
                <img src={logo} alt="" />
                <p className='text-[#F5F7FA] my-[40px] w-[40%]'>Copyright © 2020 Nexcent ltd. All rights reserved</p>
                <div className='flex gap-[16px]  '>
                    <img src={footer1} alt="" />
                    <img src={footer2} alt="" />
                    <img src={footer3} alt="" />
                    <img src={footer4} alt="" />
                </div>
            </div>
            <div className=''>
                <h1 className='text-white text-[20px] font-normal mt-4'>Company</h1>
                <div className='text-[#F5F7FA]'>
                    <p className='mt-[24px]'><Link to="/about">About us</Link></p>
                    <p className='my-[12px]'><Link to="/blog">Blog</Link></p>
                    <p className='my-[12px]'><Link to="/contact">Contact us</Link></p>
                    <p><Link to="/pricing">Pricing</Link></p>
                    <p className='mt-[12px]'><Link to="/testimonials">Testimonials</Link></p>
                </div>
            </div>
            <div className=''>
                <h1 className='text-white text-[20px] font-normal mt-4'>Support</h1>
                <div className='text-[#F5F7FA]'>
                    <p className='mt-[24px]'><Link to="/">Help center</Link></p>
                    <p className='my-[12px]'><Link to="/">Terms of service</Link></p>
                    <p className=''><Link to="/">Legal</Link></p>
                    <p className='my-[12px]'><Link to="/">Privacy policy</Link></p>
                    <p className=''><Link to="/">Status</Link></p>
                </div>
            </div>
            <div className='col-span-2'>
                <h1 className='text-white text-[20px] font-normal mt-4'>Stay up to date</h1>
                <input className='my-[24px] w-full p-3 rounded-md ' type="email" name="email" placeholder='Email' />
            </div>
        </div>
    );
};

export default Footer;


