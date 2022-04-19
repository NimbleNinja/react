import React, { Component } from 'react';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';
import Numbers from './Numbers';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.incrementNumInterval = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.incrementNumInterval);
  }

  render() {
    return (
      <div className='app'>
        <OddNumbers title='Odd number' number={this.state.number} />
        <EvenNumbers title='Even number' number={this.state.number} />
        <Numbers title='All numbers' number={this.state.number} />
        <Numbers title='Just 17' number={this.state.number} />
      </div>
    );
  }
}

export default App;
