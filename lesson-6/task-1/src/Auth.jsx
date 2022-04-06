import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  onLoginHandler = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const status = this.state.isLoggedIn;
    let button;

    if (status) {
      button = <Logout onLogin={this.onLogoutHandler} />;
    } else {
      button = <Login onLogout={this.onLoginHandler} />;
    }

    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
