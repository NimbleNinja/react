import React from 'react';
import NumbersList from './NumbersList';

const App = () => {
  return (
    <div className='app'>
      <NumbersList numbers={[1, 2, 3, 4, 5]} />
    </div>
  );
};

export default App;
