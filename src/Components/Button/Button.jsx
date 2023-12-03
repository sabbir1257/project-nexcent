import React from 'react';

const Button = (props) => {
    return (
        <button className='px-6 py-2 text-white duration-500 rounded md:ml-8 hover:bg-[#66E16A] bg-[#4caf4f]'>
            {props.children}  
        </button>
    );
};

export default Button;