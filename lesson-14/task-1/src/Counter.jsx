import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className='counter'>
      <button onClick={decrement} className='counter__button'>
        -
      </button>
      <span className='counter__value'>{counter}</span>
      <button onClick={increment} className='counter__button'>
        +
      </button>
    </div>
  );
};

export default Counter;
