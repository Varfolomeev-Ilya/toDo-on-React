import React from 'react';

import './components/body/bodyStyles.css'
import Task from './components/body/Task';
import TaskInput from './components/Header/TaskInput';
import Footer from './components/Footer/Footer';


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
      <TaskInput addTask={this.addTask}></TaskInput>   
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
        <Footer
        activeTasks={activeTasks.length}
        doneTasks={doneTasks.length}
        tasks={tasks.length}
        />  
      </div>
      </div>
    );
  }
}

export default App;
