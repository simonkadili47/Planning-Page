import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='mt-4'>
        <div className='border-b border-gray-400'></div>
        <div className='flex items-center justify-between mt-4 mx-3'>
            <div className='flex items-center ml-3 text-lg'>
                <p>Terms Policy</p>
                <p className='ml-2 mr-2'>.</p>
                <p>Customer Story</p>
            </div>
            <IoArrowForwardCircleOutline className='text-black text-3xl  mr-4' />
        </div>
    </div>
  );
}

export default Footer;
