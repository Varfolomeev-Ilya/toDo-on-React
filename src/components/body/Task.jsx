import React from 'react';
import {Main, P, ActionP} from './MainStyles';

const Task = ({ task, ...props }) => {
  const ActionBtn = () => (
    <div>
       { !task.done ? (
         <ActionP onClick={props.doneTask}>✅</ActionP>
       ) : (
         <ActionP onClick={props.deleteTask}>❎</ActionP>
       )}
       </div>
  );

  const className = 'task' + (task.done ? 'task-done' : '');  

  return(
    <Main>
    <div className={className}>
      <P>{task.title}</P>
      <ActionBtn/>
    </div>
    </Main>
  );
};

export default Task;