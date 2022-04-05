import React, { Component } from 'react';
import './colorpicker.scss';

class ColorPicker extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  showColorText = e => {
    this.setState({
      title: e.target.dataset.color,
    });
  };

  resetTitle = () => {
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <div>
        <div className='picker__title'>{this.state.title}</div>
        <div>
          <button
            data-color='Coral'
            onMouseEnter={this.showColorText}
            onMouseLeave={this.resetTitle}
            className='picker__button picker__button_coral'></button>
          <button
            data-color='Aqua'
            onMouseEnter={this.showColorText}
            onMouseLeave={this.resetTitle}
            className='picker__button picker__button_aqua'></button>
          <button
            data-color='Bisque'
            onMouseEnter={this.showColorText}
            onMouseLeave={this.resetTitle}
            className='picker__button picker__button_bisque'></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
