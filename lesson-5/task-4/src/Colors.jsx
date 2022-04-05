import React, { Component } from 'react';
import './colors.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  constructor() {
    super();
  }

  changeBgColor(color) {
    document.body.style.background = color;
  }

  render() {
    return (
      <div className='colors'>
        <button
          onClick={this.changeBgColor.bind(this, RED)}
          style={{ background: RED }}
          className='colors__button'></button>
        <button
          onClick={this.changeBgColor.bind(this, GREEN)}
          style={{ background: GREEN }}
          className='colors__button'></button>
        <button
          onClick={this.changeBgColor.bind(this, BLUE)}
          style={{ background: BLUE }}
          className='colors__button'></button>
      </div>
    );
  }
}

export default Colors;
