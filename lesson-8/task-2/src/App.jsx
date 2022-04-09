import React, { Component } from 'react';
import Clock from './Clock';

// algo
// toggleClock

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowClocks: true,
    };
  }

  toggleClock = () => {
    this.setState({
      isShowClocks: !this.state.isShowClocks,
    });
  };

  render() {
    return (
      <div className='app'>
        <button onClick={this.toggleClock} className='btn'>
          Show
        </button>

        {this.state.isShowClocks ? (
          <div className='clocks'>
            <Clock location='Kiev' offset={2} />
            <Clock location='New York' offset={0} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
