import React from 'react';
import { Button, StyledHeader, StyledInput, StyledH1 } from './HeaderStyles';

function Header(props) {
  return(
    <StyledHeader>
      <StyledH1>TODOS</StyledH1>
      <StyledInput
        onKeyPress={props.onEnterPress}
        onChange={props.onInputChange}
        value={props.inputValue}
        placeholder="what needs to be done?"
        maxLength="10"
      />
      <Button onClick={props.onCheckAllBtnClick}>CHECK ALL</Button>
      <Button onClick={props.onAddBtnClick}>ADD</Button>    
    </StyledHeader>
  )
}

export default Header;
