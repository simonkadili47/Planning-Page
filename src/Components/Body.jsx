import React, { useState, useEffect } from 'react';

const Body = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [animationState, setAnimationState] = useState('slideIn');
  const fullText = "Life Planning, Making";

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing effect
    const pauseTime = 1000; // Time to pause before restarting
    const animationDuration = 2000; // Duration of each animation

    let timer;

    if (isTyping) {
      if (index < fullText.length) {
        // Continue typing
        timer = setTimeout(() => {
          setText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        // Pause before switching to deleting
        timer = setTimeout(() => {
          setIsTyping(false);
          setAnimationState('fadeInOut'); // Change to fade-in and out effect
        }, pauseTime);
      }
    } else {
      if (index > 0) {
        // Continue deleting
        timer = setTimeout(() => {
          setText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        }, typingSpeed);
      } else {
        // Switch to bounce effect
        setAnimationState('bounce');

        // Pause before restarting
        timer = setTimeout(() => {
          setIsTyping(true);
          setAnimationState('slideIn'); // Start with slide-in effect again
        }, pauseTime + animationDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isTyping, animationState]);

  return (
    <div className="flex flex-col items-center mt-3 text-black py-4 sm:py-6">
      {/* Container for typing effect text */}
      <div className="font-bold text-2xl sm:text-3xl text-center w-full max-w-xl relative">
        <p className={`absolute inset-0 flex items-center justify-center ${animationState}`}>
          {text}
        </p>
      </div>

      {/* Container for static paragraphs with animation */}
      <div className="relative mt-4 w-full max-w-xl text-center">
        <p className={`text-2xl sm:text-3xl font-bold text-black animate-bounce`}>
          Easy to Turn Dreams a Reality.
        </p>
        <p className={`text-sm sm:text-base mt-2 animate-fadeInOut`}>
          Get exclusive offers on purchase of any plans
        </p>
      </div>
    </div>
  );
};

export default Body;
