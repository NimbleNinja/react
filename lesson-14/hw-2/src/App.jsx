import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isHide, setHide] = useState(false);

  const toggleHide = () => setHide(!isHide);

  return (
    <div className='app'>
      <button onClick={toggleHide}>hide or show</button>
      {isHide ? null : (
        <>
          <Clock location={'kiev'} offset={0} />
          <Clock location={'New York'} offset={-5} />
          <Clock location={'Africa'} offset={3} />
        </>
      )}
    </div>
  );
};

export default App;
