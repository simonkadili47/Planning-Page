import React from 'react';

const Buttons = () => {
  return (
    <div className='flex justify-center items-center mt-8'>
      <input 
        type="text" 
        placeholder='Your email' 
        className='rounded-full p-3 border px-8  border-black mr-3'
      />
      <div className='border border-black bg-black hover:bg-gray-300 hover:border-customGreen text-white rounded-full p-3 px-8'>
        <button>
          <a href="" className='text-white font-bold '>Sign Up</a>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
