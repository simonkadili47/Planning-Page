import React from 'react';

const Buttons = () => {
  return (
    <div className='flex justify-center items-center mt-12'>
      <input 
        type="text" 
        placeholder='Your email' 
        className='rounded-full p-3 border px-8  border-black mr-3'
      />
      <div className='border border-black bg-black text-white rounded-full p-3 px-8'>
        <button>
          <a href="" className='text-white'>Sign Up</a>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
