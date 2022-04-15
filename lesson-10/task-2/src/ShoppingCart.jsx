import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'iPhone 11', cost: 999 },
        { name: 'iPad Pro', cost: 799 },
      ],
    };
  }

  render() {
    const products = this.state.products;
    return (
      <div className='column'>
        <CartTitle count={products.length} userName={this.props.userName} />
        <ProductsList cartItems={products} />
      </div>
    );
  }
}

export default ShoppingCart;
