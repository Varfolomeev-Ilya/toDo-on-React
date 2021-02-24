import React from 'react';
import './InputStyles.js'
import {Button, StyledHeader, Input, H1} from './InputStyles';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  };

  addTask = () => {
    const {input} = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({input: ''});
    }
  };

  handleEnter = event => {
    if (event.key === 'Enter')
      this.addTask();
  };

  inputChange = event => {
    this.setState({input: event.target.value});
  };

  render() {
    const {input} = this.state;
    return(
      <StyledHeader>
      <H1>TODOS</H1>
      <Input
       onKeyPress={this.handleEnter}
       onChange={this.inputChange}
       value={input}
       placeholder="what needs to be done?"
       />
      <Button onClick={this.addTask}>ADD</Button> 
      </StyledHeader>
    )
  };
}

export default TaskInput;