import React from 'react';
import styled from 'styled-components';


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

class TodoInput extends React.Component {

  render() {
    
    return (
      <form onSubmit={this.props.onSubmit}>
        <Label>
          <Input type="text" 
          placeholder="write down so as not to forget"
          onChange={this.props.onChange} 
          onKeyDown={this.props.onKeyDown}
          />
        </Label>
      </form>
    );
  }
}

export default TodoInput;
