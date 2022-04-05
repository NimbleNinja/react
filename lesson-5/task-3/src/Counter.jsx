import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div className='counter'>
        <button
          onClick={this.decrement}
          data-action='decrease'
          className='counter__button'>
          -
        </button>
        <span onClick={() => this.reset()} className='counter__value'>
          {this.state.counter}
        </span>
        <button
          onClick={this.increment}
          data-action='increase'
          className='counter__button'>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
