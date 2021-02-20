import React from 'react';
import './index.css'
import TaskInput from './components/Header/TaskInput';
import Footer from './components/Footer/Footer';
import Main from './components/main/main';

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

  checkTask = (event, id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
    if (id === id) {
      localStorage.setItem('todos', JSON.stringify(this.state.tasks));
    } 
  };

  deleteTask = (event, id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    }) 
  };

  render() {  
    return (
      <div>
      <TaskInput addTask={this.addTask}/>  
      <Main tasks={this.state.tasks}
        checkTask={this.checkTask}
        deleteTask={this.deleteTask}
      />
        <Footer
        allTasks={this.state.tasks.length}
        />
      </div>   
    );
  };
}

export default App;
