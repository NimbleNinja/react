import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    window.addEventListener('offline', this.setStatus);
    window.addEventListener('online', this.setStatus);
  }

  setStatus = e => {
    this.setState({ isOnline: e.type === 'online' });
  };

  componentWillUnmount() {
    window.removeEventListener('offline', this.setStatus);
    window.removeEventListener('online', this.setStatus);
  }

  render() {
    return (
      <div className={`status ${!this.state.isOnline ? 'status_offline' : ''}`}>
        Offline
      </div>
    );
  }
}

export default ConnectionStatus;
