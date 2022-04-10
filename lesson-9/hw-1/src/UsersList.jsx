import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };
  }

  render() {
    return (
      <div className=''>
        <Filter filterText='text' count={1} />
        <ul className='users'>
          {this.props.users.map(({ name, age, id }) => (
            <User name={name} age={age} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
