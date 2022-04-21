import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const App = () => {
  return (
    <div className='page'>
      <ul className='navigation'>
        <li className='navigation__item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='navigation__item'>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products' children={<Products />} />
      </Switch>
    </div>
  );
};

export default App;
