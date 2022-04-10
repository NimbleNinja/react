import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = (user, e) => {
    e.preventDefault();
    console.log(user);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
