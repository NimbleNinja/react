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

  onBtnHandler = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    const status = this.state.isLoggedIn;
    let button;

    if (status) {
      button = <Logout onClick={this.onBtnHandler} />;
    } else {
      button = <Login onClick={this.onBtnHandler} />;
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
