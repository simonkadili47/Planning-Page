import React from 'react';
import 'animate.css'; 

const Body = () => {
  const fullText = "Life Planning, Making";

  return (
    <div className="flex flex-col items-center mt-3 text-black py-4 sm:py-6">
   
      <div className="font-bold text-2xl sm:text-3xl text-center w-full max-w-xl animate__animated animate__fadeInDown">
        <p className="flex items-center justify-center">
          {fullText}
        </p>
      </div>

     
      <div className="mt-2 w-full max-w-xl text-center">
        <p className="text-2xl sm:text-3xl font-bold text-black animate__animated animate__fadeInDown">
          Easy to Turn Dreams a Reality.
        </p>
        <p className="text-sm sm:text-base mt-2 animate__animated animate__fadeInDown">
          Get exclusive offers on purchase of any plans
        </p>
      </div>
    </div>
  );
};

export default Body;
