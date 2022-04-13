import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

const url = 'https://api.github.com/users/';

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userName);
  }

  fetchUser = userName => {
    fetch(`${url}${userName}`)
      .then(data => data.json())
      .then(userData => {
        this.setState({
          userData,
        });
      });
  };

  render() {
    const userData = this.state.userData;
    return (
      <div className='page'>
        <header className='header'>
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}

export default App;
