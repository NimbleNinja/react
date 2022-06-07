import React from 'react';
import TestUseEffectHook from './TestUseEffectHook';
import TestLifecycleMethods from './TestLifecycleMethods';

const App = () => {
  return (
    <div className='app'>
      <TestUseEffectHook />
      <TestLifecycleMethods />
    </div>
  );
};

export default App;
