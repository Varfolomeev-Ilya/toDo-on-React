import React from 'react';
import './index.css'
import Task from './components/body/Task';
import TaskInput from './components/Header/TaskInput';
import Footer from './components/Footer/Footer';

class App extends React.Component { 
  constructor() {
    super(); 
    this.state = {
      tasks: localStorage.getItem('todos') 
      ? JSON.parse(localStorage.getItem('todos')) 
      : []
    }; 
  };

  addTask = task => {
    const updatedTasks = [ ...this.state.tasks ];  
    updatedTasks.push({
      id: updatedTasks.length !== 0 ? task.length : 0, 
      title: task,
      done: false
    });
    localStorage.setItem('todos', JSON.stringify(updatedTasks))
    this.setState({tasks: updatedTasks}, () => {
    });
  };

  clearTask = task => {
    const deleteTasks = [];
    deleteTasks.push({
      id: deleteTasks.length = 0, 
      title: task,
      done: false
    });
    this.setState({tasks: deleteTasks}, () => {
    });
  };

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
      <div>
      <TaskInput addTask={this.addTask}/>  
      {[...activeTasks, ...doneTasks].map(task => (
        <Task
        doneTask={() => this.doneTask(task.id)}
        deleteTask={() => this.deleteTask(task.id)}
        task={task}
        key={task.id}
        />              
      ))}
        <Footer
        activeTasks={activeTasks.length}
        doneTasks={doneTasks.length}
        tasks={tasks.length}
        onClick={this.clearTask}
        />
      </div>   
    );
  };
}

export default App;
