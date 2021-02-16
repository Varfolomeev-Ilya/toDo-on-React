import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
display: flex;
margin: 0 auto;
`;

const Input = styled.input`
 width: 15px;
 height: 15px;
 margin: 0 auto;
 position: absolute;
`;

class CheckboxComponents extends React.Component {
  render() {
    return (
      <div>
       <Label>
      <Input type="checkbox" checked="false"/>
      </Label>
      </div>
    );
  }
}

export default CheckboxComponents;