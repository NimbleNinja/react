import React, { Component } from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: { firstName: 'Tom', lastName: 'Dohn' },
    };
  }

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const userData = this.state.userData;
    return (
      <div className='page'>
        <h1 className='title'>{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className='content'>
          <ShoppingCart userName={userData.firstName} />
          <Profile userData={userData} changeHandler={this.changeHandler} />
        </main>
      </div>
    );
  }
}

export default App;
