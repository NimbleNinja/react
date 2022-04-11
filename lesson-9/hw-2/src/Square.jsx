import React from 'react';

const Square = ({ value, id, onClick }) => {
  return (
    <button onClick={() => onClick(id)} className='square'>
      {value}
    </button>
  );
};

export default Square;
