import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const { path } = useRouteMatch();

  return (
    <div className='page__content'>
      <h1>Products</h1>
      <ul className='navigation'>
        <li className='navigation__item'>
          <Link to={`${path}/book`}>Book</Link>
        </li>
        <li className='navigation__item'>
          <Link to={`${path}/ball`}>Ball</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:productId`}>
          <Product />
        </Route>
        <Route path={`${path}`}>
          <span>Select a product please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
