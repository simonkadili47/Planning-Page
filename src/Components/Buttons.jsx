import React from 'react';

const Buttons = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8'>
      <input 
        type="text" 
        placeholder='Your email' 
        className='rounded-full p-2 sm:p-3 border px-3 sm:px-8 border-black mb-3 sm:mb-0 sm:mr-3 w-4/5 sm:w-auto text-sm sm:text-base'
      />
      <div className='w-2/5 sm:w-auto mx-4 sm:mx-0 border border-black bg-black hover:bg-gray-300 hover:border-customGreen text-white rounded-full p-2 sm:p-3'>
        <button className='w-full text-sm sm:text-base'>
          <a href="#" className='text-white font-bold block text-center'>
            Sign Up
          </a>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
