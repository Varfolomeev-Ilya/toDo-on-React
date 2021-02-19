import React from 'react';
import {Main, P} from './MainStyles';

const Task = ({ task, ...props }) => {
  const ActionBtn = () => (
    <div className="action-btn">
       { !task.done ? (
         <p class="action" onClick={props.doneTask}>✅</p>
       ) : (
         <p class="action" onClick={props.deleteTask}>❎</p>
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