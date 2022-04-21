import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';

const App = () => {
  return (
    <div className='page'>
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
