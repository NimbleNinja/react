import React from 'react';

const ProductsList = props => {
  let total = 0;
  return (
    <div className='products'>
      <ul className='products__list'>
        {props.cartItems.map(({ name, cost }, index) => {
          total += cost;
          return (
            <li key={`id-${index}`} className='products__list-item'>
              <span className='products__item-name'>{name}</span>
              <span className='products__item-price'>{`$${cost}`}</span>
            </li>
          );
        })}
      </ul>
      <div className='products__total'>{`Total: $${total}`}</div>
    </div>
  );
};

export default ProductsList;
