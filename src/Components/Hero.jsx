import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "animate.css"; 

const Hero = () => {

    return (
        <div className="container mx-auto px-4 py-16 md:py-20 space-y-16">
            <div className="w-5/6 sm:w-4/5 xl:w-2/5 mx-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-center capitalize font-bold mb-8">
                    Life planning, making easy to turn dreams a reality
                </h1>

                <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-center font-light animate__animated animate__fadeInDown">
                    Get exclusive offers on purchase of any plans
                </p>
            </div>

            <div className="flex flex-wrap md:flex-nowrap md:justify-center items-center gap-4">
                <div className="relative">
                    <FaTelegramPlane className="absolute z-10 top-3 left-3 text-black" />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your email"
                        className="text-sm border border-zinc-600 focus:border-zinc-800 rounded-full py-2.5 pl-10 pr-4 md:w-80" 
                    />
                </div>

                <button className="bg-zinc-800 text-white block text-center font-medium rounded-full w-full md:w-auto px-6 py-2 transition-all duration-300 hover:opacity-90">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Hero;
