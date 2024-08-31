import React, { useState, useEffect } from 'react';

const Body = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Life Planning, Making";

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing effect
    const pauseTime = 1000; // Time to pause before restarting

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
        // Restart typing
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isTyping]);

  return (
    <div className="flex flex-col items-center text-black pt-0 mt-10">
      {/* Container for typing effect text */}
      <div className="font-bold text-3xl text-center w-full max-w-xl relative">
        <p className={`absolute inset-0 flex items-center justify-center animate-popInOut`}>
          {text}
        </p>
      </div>

      {/* Container for static paragraphs */}
      <div className="relative mt-4 w-full max-w-xl text-center">
        <p className="text-3xl font-bold text-black animate-popInOut">
          Easy to Turn Dreams a Reality.
        </p>
        <p className="text-sm mt-2 animate-popInOut">
          Get exclusive offers on purchase of any plans
        </p>
      </div>
    </div>
  );
};

export default Body;
