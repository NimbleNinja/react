import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spiner from './Spiner';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      isSpin: false,
    };
  }

  // 1. - spiner on
  //    - login off
  //    - logout off

  // 2. - spiner off
  //    - logout on

  // 3. - spiner off
  //    - logout off
  //    - login on

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
      isSpin: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        isSpin: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    let log;
    if (this.state.isLoggedIn && !this.state.isSpin) {
      log = <Login onLogin={this.handleLogin} />;
    } else if (!this.state.isLoggedIn && !this.state.isSpin) {
      log = <Logout onLogout={this.handleLogout} />;
    }

    return (
      <div className='panel'>
        {log}
        {this.state.isSpin ? <Spiner size={'50px'} /> : null}
      </div>
    );
  }
}

export default Auth;
