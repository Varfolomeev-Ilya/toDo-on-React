import React from 'react';
import { Button, StyledHeader, Input, H1 } from './InputStyles';
import './InputStyles.js'

function Header(props) {
  return(
    <StyledHeader>
      <H1>TODOS</H1>
      <Input
        onKeyPress={props.onEnterPress}
        onChange={props.onInputChange}
        value={props.inputValue}
        placeholder="what needs to be done?"
      />
      <Button onClick={props.onAddBtnClick}>ADD</Button>
    </StyledHeader>
  )
}

export default Header;
