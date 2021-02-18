import React from 'react';
import './styles.css';
import Task from './components/header/Task';
import TaskInput from './components/header/TaskInput';


class App extends React.Component { 
  constructor() {
    super(); 
    this.state = {
      tasks: [
        {id : 0, title: '', done: false},
        {id : 0, title: 'sdfhsdkf', done: true},
        {id : 0, title: '435634', done: false}
      ]   
    }; 
  }

  addTask = task => {
    this.setState(state => {
      let {tasks} = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0, 
        title: task,
        done: false
      });
      return tasks;
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
      <h1 className="top">Active tasks: {activeTasks.length}</h1>
      {[...activeTasks, ...doneTasks].map(task => (
        <Task
        doneTask={() => this.doneTask(task.id)}
        deleteTask={() => this.deleteTask(task.id)}
        task={task}
        key={task.id}>
        </Task>
      ))}
      <TaskInput addTask={this.addTask}></TaskInput>
      </div>
    );
  }
}

export default App;
