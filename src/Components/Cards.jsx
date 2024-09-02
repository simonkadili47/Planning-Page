import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';

const AnimatedCard = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Cards = () => {
  return (
    <div className="mt-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center text-xl font-bold text-black mb-6">
        <div className="mb-4 sm:mb-0">
          <h1>Featured Plans</h1>
        </div>
        <div className="text-right">
          <p>Explore All</p>
        </div>
      </div>

      {/* Cards Container with Padding */}
      <div className="px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <AnimatedCard delay={100}>
            <div className="w-full h-60 bg-customGreen text-black rounded-lg shadow-sm p-4 flex flex-col justify-between transform transition-transform duration-300 group hover:bg-customGreen hover:shadow-lg hover:scale-102 hover:border hover:border-white">
              <div>
                <h2 className="text-sm font-semibold mb-1">STRATEGY</h2>
                <p className="text-xl font-bold">Money Momentum</p>
                <div className="mt-2 text-sm">
                  <p>Tract Premium helps you to start sarver investments insights covering.</p>
                </div>
              </div>
              <div className="border-b border-gray-400 mt-3"></div>
              <div className="mt-4 text-white"> 
                <p>3 yrs CAGR</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-white font-bold text-lg">14.20%</p>
                <FaArrowCircleRight className="text-white text-xl transition-all duration-300" />
              </div>
            </div>
          </AnimatedCard>

          {/* Card 2 */}
          <AnimatedCard delay={200}>
            <div className="w-full h-60 bg-black text-white rounded-lg shadow-sm p-4 flex flex-col justify-between transform transition-transform duration-300 group hover:bg-black hover:shadow-lg hover:scale-102 hover:border hover:border-white">
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
                <FaArrowCircleRight className="text-white text-xl transition-all duration-300" />
              </div>
            </div>
          </AnimatedCard>

          {/* Card 3 */}
          <AnimatedCard delay={300}>
            <div className="w-full h-60 bg-custompurple rounded-lg shadow-sm p-4 flex flex-col justify-between transform transition-transform duration-300 group hover:bg-customLightPurple hover:shadow-lg hover:scale-102 hover:border hover:border-customDarkPurple">
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
                <FaArrowCircleRight className="text-black text-xl  transition-all duration-300" />
              </div>
            </div>
          </AnimatedCard>

          {/* Card 4 */}
          <AnimatedCard delay={400}>
            <div className="w-full h-60 bg-customyellow rounded-lg shadow-sm p-4 flex flex-col justify-between transform transition-transform duration-300 group hover:bg-customLightYellow hover:shadow-lg hover:scale-102 hover:border hover:border-customDarkYellow">
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
                <FaArrowCircleRight className="text-black text-xl transition-all duration-300" />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Cards;
