import React, { Component } from 'react';
import Board from './Board';
import HistoryItem from './HistoryItem';
import calculateWinner from './calculateWinner.js';

class Game extends Component {
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
      <div className='game'>
        <h1 className='game__title'>Tic Tac Toe</h1>
        <div className='game__body'>
          <Board handleClick={this.handleClick} squares={this.state.squares} />
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
      </div>
    );
  }
}

export default Game;
