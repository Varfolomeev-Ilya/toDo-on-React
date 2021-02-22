import React from 'react';
import Task from '../Task/Task';

function Main(props) {
  return (
    <main>
      {props.tasks.map(task => (
        <Task
          onDoneBtnClick={props.onDoneBtnClick}
          onDeleteBtnClick={props.onDeleteBtnClick}
          task={task}
          id={task.id}
          key={task.id}
        />
      ))}
    </main>
  );
};

export default Main;
