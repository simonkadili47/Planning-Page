import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between ml-4 sm:ml-10 mt-4 sm:mt-8 text-black bg-white font-bold">
      {/* Left section with text */}
      <div className="flex items-center">
        <div className="text-lg sm:text-xl">
          <h1>Lyf</h1>
        </div>
        <div className="ml-1 sm:ml-3 text-sm sm:text-base">
          <h1>/insuarance@tiropay.au</h1>
        </div>
      </div>
      
      {/* Right section with buttons */}
      <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-0 mr-4 sm:mr-24">
        <div className="border px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-200 hover:border-gray-400">
          <button>
            <a href="#">Log In</a>
          </button>
        </div>
        <div className="border px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-400 hover:border-customGreen bg-black text-white">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
