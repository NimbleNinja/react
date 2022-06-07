import React, { useEffect, useState } from 'react';

const TestUseEffectHook = () => {
  const [count, setCount] = useState({
    counter: 0,
    bool: false,
    text: '',
  });

  useEffect(() => {
    console.log('useEffect is worked');
  }, [count]);

  const clickHandler = () => {
    setCount({
      counter: count.counter === 0 ? count.counter + 1 : count.counter * 2,
    });
  };

  console.log('render');

  return (
    <div className='useEffect'>
      <button onClick={clickHandler}>{count.counter}</button>
    </div>
  );
};

export default TestUseEffectHook;
