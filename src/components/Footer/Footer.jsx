import React from 'react';
import { StyledFooter, StyledUl, StyledLi, StyledA, StyledButton } from './FooterStyles';

function Footer(props) {
  const allTasks = props.allTasks;
  const completedTasks = allTasks.filter(item => item.isDone);
  const itemsLeft = allTasks.filter(item => !item.isDone);

  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>
          <StyledA id="left" onClick={props.onFilterBtnClick}>Items left: {itemsLeft.length}</StyledA>
        </StyledLi>

        <StyledLi>
          <StyledA id="completed" onClick={props.onFilterBtnClick}>Completed: {completedTasks.length}</StyledA>
        </StyledLi>

        <StyledLi>
          <StyledA id="all" onClick={props.onFilterBtnClick}>All: {allTasks.length}</StyledA>
        </StyledLi>

        <StyledLi>
          <StyledButton type="button" onClick={props.onClearComplited}>Clear complited</StyledButton>
        </StyledLi>
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
