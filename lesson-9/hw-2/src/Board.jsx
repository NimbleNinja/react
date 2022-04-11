import React, { Component } from 'react';
import Square from './Square';
import HistoryItem from './HistoryItem';
import calculateWinner from './calculateWinner.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      history: [],
    };
  }

  handleClick = i => {
    const newSquares = [...this.state.squares];
    if (newSquares[i] || calculateWinner(newSquares)) {
      return null;
    }
    newSquares[i] = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
      history: [...this.state.history, newSquares],
    });
  };

  backToStep = i => {
    this.setState({
      squares: this.state.history[i],
    });
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    let status = winner
      ? `Winner is: ${winner.toUpperCase()}`
      : `Next step: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div className='game__body'>
        <div className='board'>
          {this.state.squares.map((square, index) => (
            <Square
              onClick={this.handleClick}
              key={`id-${index}`}
              id={index}
              value={square}
            />
          ))}
        </div>
        <div className='game__conrtol-panel'>
          <h2 className='game__player-info'>{status}</h2>
          <ul className='game__history'>
            {!this.state.history.length
              ? null
              : this.state.history.map((el, i, arr) => (
                  <HistoryItem
                    onClick={this.backToStep}
                    key={`id-${i}`}
                    step={i}
                    countOfSteps={arr.length}
                  />
                ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Board;
