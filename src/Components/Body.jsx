import React, { useState, useEffect } from 'react';

const Body = () => {
  // State and effects related to typing and deleting are removed

  return (
    <div className="flex flex-col items-center text-black pt-0 mt-10">
      <div className="font-bold text-3xl text-center">
        {/* Static Text */}
        <p>
          Life Planning, Making
        </p>
        <p className="text-3xl text-center">
          Easy to Turn Dreams a Reality.
        </p>
        <p className="text-sm mt-4 text-center">
          Get exclusive offers on purchase of any plans
        </p>
      </div>
    </div>
  );
};

export default Body;
