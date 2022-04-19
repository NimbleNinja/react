import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  showDialog = () => {
    this.setState({ isOpen: true });
  };

  closeDialog = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className='app'>
        <button className='btn' onClick={this.showDialog}>
          Show dialog
        </button>
        {!this.state.isOpen ? null : (
          <Dialog title='Recommendation' onClose={this.closeDialog}>
            <p>
              Use immutable array methods to work with data. It will help to
              avoid bugs
            </p>
          </Dialog>
        )}
      </div>
    );
  }
}

export default App;
