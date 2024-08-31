import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between ml-10 mt-8 text-black bg-white font-bold">
      {/* Left section with text */}
      <div className="flex items-center">
        <div className="text-xl">
          <h1>Lyf</h1>
        </div>
        <div className="ml-3">
          <h1>/insuarance@tiropay.au</h1>
        </div>
      </div>
      
      {/* Right section with buttons */}
      <div className="flex space-x-4 mr-24">
        <div className="border px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-400">
          <button>
            <a href="#">Log In</a>
          </button>
        </div>
        <div className="border px-4 py-2 rounded-full hover:bg-gray-400 hover:border-customGreen bg-black text-white">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
