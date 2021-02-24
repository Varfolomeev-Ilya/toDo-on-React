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
      blurInputValue: '',
      tasks: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
      activeFilter: 'all',
    };
  };

  changeInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  changeBlurInputValue = event => {
    this.setState({
      blurInputValue: event.target.value
    });
  };

  changeTasksArr = (arr) => {
    this.setState({
      tasks: arr
    });
    localStorage.setItem('todos', JSON.stringify(arr));
  }

  addTasks = inputValue => {
    const newTask = {
      id: Date.now(),
      title: inputValue,
      isDone: false,
      isInput: false
    }

    const updatedTasks = [newTask, ...this.state.tasks];
    this.changeTasksArr(updatedTasks);
  };

  addTask = () => {
    if (this.state.inputValue) {
      this.addTasks(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    };
  };

  checkAll = () => {
    const everyUnDone = this.state.tasks.every(item => !item.isDone);
    const everyDone = this.state.tasks.every(item => item.isDone);
    const someUnDone = this.state.tasks.some(item => !item.isDone);
    const someDone = this.state.tasks.some(item => item.isDone);

    if (everyUnDone || everyDone) {
      const tasks = this.state.tasks.map(item => {
        item.isDone = !item.isDone;

        return item;
      });

      this.changeTasksArr(tasks);
    }

    if (someDone && someUnDone) {
      const tasks = this.state.tasks.map(item => {
        item.isDone = true;

        return item;
      });

      this.changeTasksArr(tasks);
    }
  }

  handleEnter = event => {
    if (event.key === 'Enter')
      this.addTask();
  };

  deleteTask = id => {
    const filteredTasks = this.state.tasks.filter(item => id !== item.id);

    this.changeTasksArr(filteredTasks);
  };

  checkTask = id => {
    const isDoneTasks = this.state.tasks.map(item => {
      if (id === item.id) {
        item.isDone = !item.isDone;
      };

      return item;
    });

    this.changeTasksArr(isDoneTasks);
  };

  handleClearComplited = () => {
    const clearComplited = this.state.tasks.filter(item => !item.isDone);

    this.changeTasksArr(clearComplited);
  };

  handleTaskDblClick = id => {
    const isInputTasks = this.state.tasks.map(item => {
      if (id === item.id) {
        item.isInput = true;

        this.setState({
          blurInputValue: item.title
        });
      };

      return item;
    });

    this.changeTasksArr(isInputTasks);
  }

  handleInputBlur = id => {
    const newTasks = this.state.tasks.map(item => {
      if (id === item.id) {
        item.title = this.state.blurInputValue;
        item.isInput = false;
      };

      return item;
    });

    this.changeTasksArr(newTasks);
  }

  handleFilterBtnClick = event => {
    if (event.target.id === 'all') {
      this.setState ({
        activeFilter: 'all'
      });
    }

    if (event.target.id === 'completed') {
      this.setState ({
        activeFilter: 'completed'
      });
    }

    if (event.target.id === 'left') {
      this.setState ({
        activeFilter: 'left'
      });
    }
  }

  render() {
    return (
      <>
        <Header
          addTask={this.addTask}
          onEnterPress={this.handleEnter}
          onInputChange={this.changeInputValue}
          inputValue={this.state.inputValue}
          onAddBtnClick={this.addTask}
          onCheckAllBtnClick={this.checkAll}
        />
        <Main
          tasks={this.state.tasks}
          onDoneBtnClick={this.checkTask}
          onDeleteBtnClick={this.deleteTask}
          onTaskDblClick={this.handleTaskDblClick}
          onInputBlur={this.handleInputBlur}
          onBlurInputChange={this.changeBlurInputValue}
          blurInputValue={this.state.blurInputValue}
          activeFilter={this.state.activeFilter}
        />
        <Footer
          allTasks={this.state.tasks}
          onClearComplited={this.handleClearComplited}
          onFilterBtnClick={this.handleFilterBtnClick}
        />
      </>
    );
  };
}

export default App;
