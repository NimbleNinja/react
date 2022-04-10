import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = (user, e) => {
    e.preventDefault();

    const formData = [...new FormData(user)].reduce((acc, [key, value]) => {
      return { ...acc, [key]: value };
    }, {});

    console.log(formData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
