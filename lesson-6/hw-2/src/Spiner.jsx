import React from 'react';

const Spiner = ({ size }) => {
  return (
    <span style={{ width: size, height: size }} className='spinner'></span>
  );
};

export default Spiner;
