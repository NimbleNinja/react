import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <span className='filter__count'>5</span>
        <input type='text' className='filter__input' value='a' />
      </div>
    );
  }
}

export default Filter;
