import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    const url = `https://api.github.com/users/${userId}`;
    fetch(url)
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
