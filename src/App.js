import React from 'react';

import './components/body/bodyStyles.css'
import Task from './components/body/Task';
import TaskInput from './components/Header/TaskInput';


class App extends React.Component { 
  constructor() {
    super(); 
    this.state = {
      tasks: []   
    }; 
  }

  addTask = task => {
    const updatedTasks = [ ...this.state.tasks ];  
    updatedTasks.push({
      id: updatedTasks.length !== 0 ? task.length : 0, 
      title: task,
      done: false
    });
    this.setState({tasks: updatedTasks}, () => {
    });
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const {tasks} = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">
      <div className="todoApp">
      <div className="header"> 
      <h1 className="title">TODOS</h1>
      <TaskInput addTask={this.addTask}></TaskInput>
      </div>
      <div className="main">
      {[...activeTasks, ...doneTasks,].map(task => (
        <Task
        doneTask={() => this.doneTask(task.id)}
        deleteTask={() => this.deleteTask(task.id)}
        task={task}
        key={task.id}>
        </Task>
      ))}
      </div>
      <footer className="footer">
      <ul className="filters">
      <li>
        <a href="3" className="all">Items left: {activeTasks.length}</a>
      </li>
      <li>
        <a href="2" className="selected">Completed: {doneTasks.length}</a>
      </li>
      <li>
        <a href="1" className="all todos">All: {tasks.length}</a>
      </li> 
      </ul>
      </footer>
      </div>
      </div>
    );
  }
}

export default App;
