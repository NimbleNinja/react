import React from 'react';

const Square = ({ value, id, onClick }) => (
  <button onClick={() => onClick(id)} className='square'>
    {value}
  </button>
);

export default Square;
