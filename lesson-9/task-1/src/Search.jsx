import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  inpHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className='search'>
        <input
          className='search__input'
          value={this.state.value}
          onChange={this.inpHandler}
          type='text'
        />
        <button onSubmit={this.submitHandler} className='search__button'>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
