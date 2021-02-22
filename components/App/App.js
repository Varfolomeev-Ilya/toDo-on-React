import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../../index.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      tasks: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    };
  };

  addTask = () => {
    if (this.state.inputValue) {
      this.props.addTask(this.state.inputValue);
      this.setState({inputValue: ''});
    };
  };

  handleEnter = event => {
    if (event.key === 'Enter')
      this.addTask();
  };

  changeInputValue = event => {
    this.setState({inputValue: event.target.value});
  };

  addTasks = task => {
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
    });
    if (event.target === event.currentTarget) {
      localStorage.setItem('todos', JSON.stringify(this.state.tasks));
    }
  };

  deleteTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    return (
      <>
        <Header
          addTask={this.addTask}         
          onEnterPress={this.handleEnter}
          onInputChange={this.changeInputValue}
          inputValue={this.state.inputValue}
          onAddBtnClick={this.addTask}
        />
        <Main
          tasks={this.state.tasks}
          onDoneBtnClick={this.checkTask}
          onDeleteBtnClick={this.deleteTask}
        />
        <Footer
          allTasks={this.state.tasks.length}
        />
      </>
    );
  };
}

export default App;
