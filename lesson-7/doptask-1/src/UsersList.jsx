import React from 'react';
import Pagination from './Pagination';
import User from './User';
import './userslist.scss';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  itemsPerPage = 3;

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const startIndex = this.itemsPerPage * (this.state.currentPage - 1);
    const endIndex = this.itemsPerPage * this.state.currentPage;
    const usersToRender = this.props.users.slice(startIndex, endIndex);
    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.itemsPerPage}
        />
        <ul className='users'>
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
