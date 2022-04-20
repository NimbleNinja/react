import React, { Component } from 'react';

class CreateTaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  inputValueHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  createTaskBtnHandler = () => {
    this.props.createTask(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className='create-task'>
        <input
          className='create-task__input'
          type='text'
          value={this.state.value}
          onChange={this.inputValueHandler}
        />
        <button
          onClick={this.createTaskBtnHandler}
          className='btn create-task__btn'>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1. take input value
// 2. create onChangeHandler
// 3. create new task
// 4. add task to list
