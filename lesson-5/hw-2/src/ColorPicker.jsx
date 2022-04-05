import React, { Component } from 'react';
import './colorpicker.scss';

class ColorPicker extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  showColorText = color => {
    this.setState({
      title: color,
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
            onMouseEnter={() => this.showColorText('Coral')}
            onMouseLeave={this.resetTitle}
            className='picker__button picker__button_coral'></button>
          <button
            onMouseEnter={() => this.showColorText('Aqua')}
            onMouseLeave={this.resetTitle}
            className='picker__button picker__button_aqua'></button>
          <button
            onMouseEnter={() => this.showColorText('Bisque')}
            onMouseLeave={this.resetTitle}
            className='picker__button picker__button_bisque'></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
