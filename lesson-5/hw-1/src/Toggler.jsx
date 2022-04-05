import React, { Component } from 'react';
import './toggler.scss';

class Toggler extends Component {
  constructor() {
    super();

    this.state = {
      toggler: 'Off',
    };

    this.handleToggler = this.handleToggler.bind(this);
  }

  handleToggler() {
    this.setState({
      toggler: this.state.toggler === 'Off' ? 'On' : 'Off',
    });
  }

  render() {
    return (
      <div onClick={this.handleToggler} className='toggler'>
        {this.state.toggler}
      </div>
    );
  }
}

export default Toggler;
