import React, { Component } from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
};

class TemperatureInput extends Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите градусы по шкале {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
