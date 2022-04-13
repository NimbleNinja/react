import React, { Component } from 'react';
import Square from './Square.jsx';

class Board extends Component {
  render() {
    return (
      <div className='board'>
        {this.props.squares.map((square, index) => (
          <Square
            onClick={this.props.handleClick}
            key={`id-${index}`}
            id={index}
            value={square}
          />
        ))}
      </div>
    );
  }
}

export default Board;
