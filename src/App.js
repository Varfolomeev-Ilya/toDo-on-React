import React from 'react';
import './styles.css';
import SectionComponents from './components/body/SectionComponents';
import HeaderComponents from './components/header/HeaderComponents';
import FooterComponents from './components/footer/FooterComponents';
import TodoInput from './components/header/TodoInput';
import ContextToDo from './components/contexts/ContextToDo';


class App extends React.Component { 
  constructor() {
    super(); 
    this.state = {
      value: '' ,
      toDos: [] } ;
  }

  handleChange = event => {
    this.setState({value: event.target.value});
   
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }


  onKeyPressEnter = (event) => {
    if(event.keyCode === 13) {  
      const toDo = {todoValue : this.state.value}  
      const toDoText = this.state.toDos.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoText));     
      
    }   
  }

  render() {
    return (
      <div className="App">
      <ContextToDo.Provider value={this.state.value}/>
        <HeaderComponents/> 
          <TodoInput onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onKeyDown={this.onKeyPressEnter}
          />
          <SectionComponents/>
          <FooterComponents/>
      </div>
    );
  }
}

export default App;
