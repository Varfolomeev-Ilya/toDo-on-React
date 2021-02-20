import React from 'react';
import {P, ActionP} from './MainStyles';

const Task = ({ task, ...props }) => {
  const className = 'task' + (task.done ? 'task-done' : '');  

  return(
    <div className={className}>
      <P>{task.title}</P>
      <div>   
         <ActionP onClick={(event) => props.checkTask(event, props.id)} >✅</ActionP> 
         <ActionP onClick={(event) => props.deleteTask(event, props.id)}>❎</ActionP>   
    </div>
    </div>
  );
};

export default Task;