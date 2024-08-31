import React from "react";

const Header = () => {
  return (
    <div className="flex ml-10 mt-8 text-black bg-white font-bold">
      <div className="flex justify-start items-start">
        <div className="text-xl">
          <h1>Lyf</h1>
        </div>
        <div className="ml-3">
          <h1>/insuarance@tiropay.au</h1>
        </div>
        <div className="ml-4 border px-4 py-2 rounded-full">
          <button>
            <a href="">Login</a>
          </button>
        </div>
        <div className="ml-4 border px-4 py-2 rounded-full bg-black text-white">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
