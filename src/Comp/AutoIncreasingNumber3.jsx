// src/components/AutoIncreasingNumber3.jsx

import React, { useState, useEffect } from 'react';

const AutoIncreasingNumber3 = ({ start = 1, interval = 1000, end = 5 }) => {
  const [number, setNumber] = useState(start);
  const [autoIncrementStarted, setAutoIncrementStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5100 && !autoIncrementStarted) {
        setAutoIncrementStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [autoIncrementStarted]);

  useEffect(() => {
    if (autoIncrementStarted && number < end) {
      const timer = setInterval(() => {
        setNumber(prevNumber => prevNumber + 1);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoIncrementStarted, number, interval, end]);

  return (
    <div>
      {autoIncrementStarted && <h1>{number}</h1>}
    </div>
  );
};

export default AutoIncreasingNumber3;
