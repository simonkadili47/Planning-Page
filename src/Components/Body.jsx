import React, { useState, useEffect } from 'react';
import 'animate.css';

const Body = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [pulseClass, setPulseClass] = useState('animate__animated animate__pulse animate__infinite');
  const [swingClass, setSwingClass] = useState('animate__animated animate__swing animate__infinite');

  const phrases = [
    "Life Planning, Making",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <div className="flex flex-col items-center text-black pt-0 mt-10">
      <div className="font-bold text-3xl text-center">
        {/* Typing and Deleting Effect */}
        <p className={`animate__animated animate__fadeIn ${loopNum === 0 ? 'animate__delay-0s' : ''}`}>
          {text}
        </p>
        {/* Pulse Effect */}
        <p className={`text-3xl text-center ${pulseClass}`}>
          Easy to Turn Dreams a Reality.
        </p>
        {/* Swing Effect */}
        <p className={`text-sm mt-4 text-center ${swingClass}`}>
          Get exclusive offers on purchase of any plans
        </p>
      </div>
      
    </div>
  );
};

export default Body;
