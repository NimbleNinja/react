import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    student: '',
    occupation: '',
    about: '',
  };

  inputHandler = e => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <form
        className='login-form'
        onSubmit={e => this.props.onSubmit(this.state, e)}>
        <h1 className='form-title'>Profile</h1>
        <div className='form-control'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-input'
            onChange={this.inputHandler}
            type='text'
            id='name'
            name='name'
            value={this.state.name}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor='student'>
            Student
          </label>
          <input
            className='form-input'
            onChange={this.inputHandler}
            checked={this.state.student}
            type='checkbox'
            id='student'
            name='student'
          />
        </div>
        <div className='form-control'>
          <label className='form-label' id='occupation' htmlFor='occupation'>
            Occupation
          </label>
          <select
            className='form-input'
            onChange={this.inputHandler}
            name='occupation'
            value={this.state.occupation}>
            <option value='london'>London</option>
            <option value='new-york'>New York</option>
            <option value='sidney'>Sidney</option>
            <option value='berlin'>Berlin</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' id='about' htmlFor='about'>
            About
          </label>
          <textarea
            className='form-input'
            onChange={this.inputHandler}
            name='about'
            value={this.state.about}
          />
        </div>
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
