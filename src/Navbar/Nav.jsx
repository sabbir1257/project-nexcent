import React, { useState } from 'react';
import logo from "../assets/Logo.png"
import { Link } from 'react-router-dom';
import { IoCloseSharp, IoMenu } from 'react-icons/io5';


const Nav = () => {
    const [open, setOpen] = useState(false);
    const navLink = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/service" },
        { name: "Feature", link: "/feature" },
        { name: "Product", link: "/product" },
        { name: "Testimonial", link: "/testimonial" },
        { name: "FAQ", link: "/faq" },
    ]

    return (
        <div className='w-full px-3 text-center'>
            <div className='md:h-[84px] flex items-center justify-between'>

                {/* logo  */}
                <Link to="/"><img src={logo} alt="" /></Link>

                {/* res navbar toggle  */}
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ? <IoCloseSharp /> : <IoMenu />
                        }
                    </span>
                </div>

                {/* navbar link  */}
                <ul className={`md:md:ml-40 gap-[50px] text-[16px] md:flex font-normal duration-500 absolute md:static bg-slate-700 md:bg-white text-white md:text-gray-800 pb-4 md:p-0 rounded w-full md:items-center  ${open ? 'top-5' : 'top-[-490px]'}`}>
                    {
                        navLink.map((link) => (
                            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))
                    }
                    
                    {/* navbar btn  */}
                    <div className='  text-[20px]  text-center font-medium md:ml-40'>
                        <button className='text-[#4caf4f]'><Link to="/login">Login</Link></button>
                        <button className='ml-[54px] md:px-[20px] px-2 py-[10px] text-white bg-green-400 rounded'><Link to="/singup">Sing Up</Link></button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;