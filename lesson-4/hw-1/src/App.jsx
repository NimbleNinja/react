import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location='Kiev' offset={2} />
      <Clock location='New York' offset={0} />
    </>
  );
};

export default App;
