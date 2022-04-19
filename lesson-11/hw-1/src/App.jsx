import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isShow: false,
  };

  toggleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    return (
      <div className='app'>
        <Expand
          toggleShow={this.toggleShow}
          isShow={this.state.isShow}
          title='Some title'>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
