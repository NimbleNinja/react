import React from 'react';
import Pagination from './Pagination';
import User from './User';
import './userslist.scss';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      totalItems: this.props.users.length,
      itemsPerPage: 3,
    };
  }

  goNext = () => {
    const maxPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);
    if (this.state.currentPage === maxPages) {
      return;
    }
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    if (this.state.currentPage === 1) {
      return;
    }
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const from = this.state.itemsPerPage * (this.state.currentPage - 1);
    const to = this.state.itemsPerPage * this.state.currentPage;
    const currentPageUsers = this.props.users.slice(from, to);
    return (
      <>
        <Pagination goPrev={this.goPrev} goNext={this.goNext} {...this.state} />
        <ul className='users'>
          {currentPageUsers.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
