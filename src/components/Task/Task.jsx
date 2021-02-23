import React from 'react';
import { StyledP, ActionP } from './TaskStyles';

function Task(props) {
  const className = 'task' + (props.isDone ? 'task-done' : '');

  return(
    <div onDoubleClick={() => props.onTaskDblClick(props.id)} className={className}>
      <StyledP>{props.title}</StyledP>
      <div>
        <ActionP onClick={() => props.onDoneBtnClick(props.id)}>✅</ActionP>
        <ActionP onClick={() => props.onDeleteBtnClick(props.id)}>❎</ActionP>
      </div>
    </div>
  );
};

export default Task;
