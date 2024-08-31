import React from 'react';

const Buttons = () => {
  return (
    <div className='relative mt-12 flex'>
      <input 
        type="text" 
        placeholder='Your email' 
        className='rounded-full p-3 border border-black'
      />
      <div className=' border border-black bg-black text-white rounded-full p-3  px-8 ml-3'>
        <button><a href="">Sign Up</a></button>
      </div>
    </div>
    
  );
};

export default Buttons;
