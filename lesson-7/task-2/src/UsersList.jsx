import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortType: null,
    };
  }

  sortUsers = () => {
    this.setState({
      sortType: this.state.sortType === 'asc' ? 'desc' : 'asc',
    });
  };

  render() {
    let sorterUsers;

    if (this.state.sortType) {
      sorterUsers = [...this.props.users].sort((a, b) => {
        return this.state.sortType === 'asc' ? a.age - b.age : b.age - a.age;
      });
    } else {
      sorterUsers = [...this.props.users];
    }

    return (
      <div>
        <button onClick={this.sortUsers} className='btn'>
          {this.state.sortType || '-'}
        </button>
        <ul className='users'>
          {sorterUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
