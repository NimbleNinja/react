import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  fetchTasks,
  postTaskOnServer,
  putTaskOnServer,
  deleteTaskFromServer,
} from './serverRequests';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    fetchTasks().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  }

  createTask = text => {
    if (!text) {
      return null;
    }

    const newTask = {
      text,
      done: false,
    };

    postTaskOnServer(newTask).then(task => {
      this.setState({
        tasks: [...this.state.tasks, task],
      });
    });
  };

  updateTaskStatus = id => {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);

    const taskToUpdate = {
      done: !task.done,
    };

    putTaskOnServer(id, taskToUpdate).then(() => {
      const updatedTasksList = tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });

      this.setState({
        tasks: updatedTasksList,
      });
    });
  };

  deleteTask = id => {
    deleteTaskFromServer(id).then(() => {
      const updatedTasksList = this.state.tasks.filter(task => {
        return task.id !== id;
      });

      this.setState({
        tasks: updatedTasksList,
      });
    });
  };

  render() {
    const sortedTasks = [...this.state.tasks].sort((a, b) => {
      return a.done - b.done;
    });
    return (
      <main className='todo-list'>
        <CreateTaskInput createTask={this.createTask} />
        <ul className='list'>
          {sortedTasks.map(task => {
            return (
              <Task
                updateTaskStatus={this.updateTaskStatus}
                deleteTask={this.deleteTask}
                key={task.id}
                {...task}
              />
            );
          })}
        </ul>
      </main>
    );
  }
}

export default TasksList;
