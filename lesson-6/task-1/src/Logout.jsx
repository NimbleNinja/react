import React from 'react';

const Logout = ({ onClick }) => {
  return (
    <button onClick={onClick} className='btn logout'>
      Logout
    </button>
  );
};

export default Logout;
