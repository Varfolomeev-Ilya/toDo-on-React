import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  width: 100%;
  outline: none;
  font: bold italic 110% serif;
  font-size: 24px;
`;

const Label = styled.label`
  max-width: 550px;
  max-height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: #12745615;
`;  

class InputComponents extends React.Component {
  constructor() {
  super();
  this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          <Input type="text" 
          value={this.state.value}
          onChange={this.handleChange.bind(this)} 
          placeholder="write down so as not to forget"
          />
        </Label>
      </form>
    );
  }
}

export default InputComponents;
