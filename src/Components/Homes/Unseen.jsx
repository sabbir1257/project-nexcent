import React from 'react';
import unseen from '../../assets/unseen.png'
const Unseen = () => {
    return (
        <div className='items-center justify-between w-full md:flex'>
            <div>
                <img src={unseen} alt="" />
            </div>
            <div className='p-4'>
                <h1 className='text-[36px] font-normal mb-[16px]'>The unseen of spending three <br /> years at Pixelgrade</h1>
                <p className='text-[#717171] mb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed  <br /> accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='bg-[#4CAF4F] text-white py-[14px] px-[32px] rounded'>Learn More</button>
            </div>
        </div>
    );
};

export default Unseen;


