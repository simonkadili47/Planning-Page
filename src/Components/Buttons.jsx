import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Buttons = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8'>
      <div className="relative flex items-center">
        {/* Icon positioned absolutely */}
        <FaTelegramPlane className="absolute left-3 text-gray-500" />
        <input 
          type="text" 
          placeholder='Your email' 
          className="border px-10 py-1 sm:px-12 sm:py-2 rounded-full bg-white border-black text-black font-bold"
        />
      </div>
      <div className="border px-3 sm:px-4 ml-2 py-1 sm:py-2 rounded-full hover:bg-gray-400 hover:border-customGreen bg-black text-white mt-4 sm:mt-0">
        <button>
          <a href="#" className='text-white font-bold block text-center'>
            Sign Up
          </a>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
