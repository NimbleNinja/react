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

  onChangeHandler = e => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const filteredUsers = this.props.users.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filterText.toLowerCase());
    });

    return (
      <div className=''>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsers.length}
          onChange={this.onChangeHandler}
        />
        <ul className='users'>
          {filteredUsers.map(({ name, age, id }) => (
            <User name={name} age={age} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
