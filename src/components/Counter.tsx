import React, { useState } from 'react';
import './Couner.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((value) => value + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export { Counter };