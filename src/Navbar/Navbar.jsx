import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import logo from "../assets/Logo.png"
const Navbar = () => {
    const navLinkData = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/service" },
        { label: "Contacts", path: "/contact" }
    ];

    const [open, setOpen] = useState(false)

    return (
        <div className='top-0 left-0 w-full shadow-md fiex'>
            <div className='items-center justify-between py-4 md:flex md:px-10 px-7'>
                <div className='flex items-center text-2xl font-bold cursor-pointer'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
                    {open ? <IoCloseSharp /> : <IoMenu />}
                </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        {
                            navLinkData.map((link) => (
                                <li key={link.label} className='text-xl md:ml-8 md:my-0 my-7'>
                                    <Link to={link.path} className='text-gray-800 duration-500 hover:text-gray-400'>{link.label}</Link>
                                </li>
                            ))
                        }
                        
                        <Button><Link to="/login">Login</Link></Button>
                        <Button><Link to="/singup">Sing Up</Link></Button>
                    </ul>
                    
                    {/* <div className='flex gap-2'> */}
                        {/* <button className='text-[20px]  rounded hover:text-[#66E16A] text-[#4caf4f]'>
                            <Link to="/login">Login</Link>
                        </button>
                        <Button className='text-[20px] px-4 py-2 text-white duration-500 rounded  hover:bg-[#66E16A] bg-[#4caf4f]'>
                            <Link to='/singUp'>Sing up</Link>
                        </Button> */}
                    {/* </div> */}
                </div>
        </div>
    );
};

export default Navbar;


