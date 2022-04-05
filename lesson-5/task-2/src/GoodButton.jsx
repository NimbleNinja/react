import React, { Component } from 'react';
import './goodbutton.scss';

class GoodButton extends Component {
  handleClick(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button onClick={this.handleClick} className='fancy-button'>
        Click me
      </button>
    );
  }
}

export default GoodButton;
