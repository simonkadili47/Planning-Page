import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center text-xl font-bold text-black mb-6">
        <div className="ml-10">
          <h1>Featured Plans</h1>
        </div>
        <div className="mr-24">
          <p>Explore All</p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex gap-6 ml-10 justify-center items-center">
        {/* Card 1 */}
        <div className="w-64 h-60 bg-customGreen rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl hover:scale-105 transform transition-transform duration-300 group">
          <div>
            <h2 className="text-sm font-semibold mb-2">STRATEGY</h2>
            <p className="text-xl font-bold text-black">Money Momentum</p>
            <div className="mt-3 text-sm text-black">
              <p>Tract Premium helps you start sarver</p>
              <p>investments insights covering</p>
            </div>
          </div>
          <div className="border-b border-gray-400 mt-4"></div>
          <div className="mt-4">
            <p>3 yrs CAGR</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-black font-bold text-lg">7.20%</p>
            <FaArrowCircleRight className="text-black text-xl group-hover:bg-white group-hover:p-1 group-hover:rounded-none transition-all duration-300" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-64 h-60 bg-black text-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl hover:scale-105 transform transition-transform duration-300 group">
          <div>
            <h2 className="text-sm font-semibold mb-2">PLANS</h2>
            <p className="text-xl font-bold">Long-Term</p>
            <div className="mt-3 text-sm">
              <p>Create a vision. To get started, imagine your dream life.</p>
            </div>
          </div>
          <div className="border-b border-gray-400 mt-4"></div>
          <div className="mt-4 text-white">
            <p>25 yrs CAGR</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-white font-bold text-lg">14.20%</p>
            <FaArrowCircleRight className="text-white text-xl group-hover:bg-black group-hover:p-1 group-hover:rounded-none transition-all duration-300" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-64 h-60 bg-custompurple rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl hover:scale-105 transform transition-transform duration-300 group">
          <div>
            <h2 className="text-sm font-semibold mb-2">STRATEGY</h2>
            <p className="text-xl text-black font-bold">Focussed</p>
            <div className="mt-3 text-sm">
              <p>Be Focussed Life Planning. However can serve as roadmap or guide.</p>
            </div>
          </div>
          <div className="border-b border-gray-400 mt-4"></div>
          <div className="mt-4">
            <p>1 year returns</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-black font-bold text-lg">11.20%</p>
            <FaArrowCircleRight className="text-black text-xl group-hover:bg-white group-hover:p-1 group-hover:rounded-none transition-all duration-300" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-64 h-60 bg-customyellow rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl hover:scale-105 transform transition-transform duration-300 group">
          <div>
            <h2 className="text-sm font-semibold mb-2">PLANS</h2>
            <p className="text-xl font-bold text-black">Fixed Income</p>
            <div className="mt-3 text-sm text-black">
              <p>Get multiple benefits, and lumpsum option & Guaranted Returns</p>
            </div>
          </div>
          <div className="border-b border-gray-400 mt-4"></div>
          <div className="mt-4">
            <p>5 yrs CAGR</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-black font-bold text-lg">8.20%</p>
            <FaArrowCircleRight className="text-black text-xl group-hover:bg-white group-hover:p-1 group-hover:rounded-none transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
