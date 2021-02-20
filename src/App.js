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
      id: Date.now(), 
      title: task,
      done: false
    });
    localStorage.setItem('todos', JSON.stringify(updatedTasks))
    this.setState({tasks: updatedTasks}, () => {
    });
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state
      tasks[index].done = true;
      return tasks.length;
    });
 
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index]
      return tasks
    });
  };

  clearTask = () => {
  }

  render() {
    const {tasks} = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    localStorage.setItem('aktiveTasks',JSON.stringify(activeTasks));
    const doneTasks = tasks.filter(task => task.done);
    localStorage.setItem('taskComplited', JSON.stringify(doneTasks));
    const allTasks = activeTasks.concat(doneTasks);
    localStorage.setItem('allTasks', JSON.stringify(allTasks));

    return (
      <div>
      <TaskInput addTask={this.addTask}/>  
      {[...activeTasks, ...doneTasks].map(task => (
        <Task
        doneTask={() => this.doneTask(task.id)}
        deleteTask={() => this.deleteTask(task.id)}
        task={task}
        key={task.id}
        allTAsks={this.allTasks}
        />              
      ))}
        <Footer
        activeTasks={activeTasks.length}
        doneTasks={doneTasks.length}
        allT
        allTasks={allTasks.length}
        onClick={() => this.clearTask}
        />
      </div>   
    );
  };
}

export default App;
