import React from 'react';
import Task from '../Task/Task';
import {StyledInput} from './MainStyles'

function Main(props) {
  const activeFilter = props.activeFilter;

  const createFilteredArr = () => {
    if (activeFilter === 'all') {
      return props.tasks;
    }

    if (activeFilter === 'completed') {
      return props.tasks.filter(item => item.isDone);
    }

    if (activeFilter === 'left') {
      return props.tasks.filter(item => !item.isDone);
    }
  };

  const tasks = createFilteredArr();

  return (
    <main>
      {tasks.map(task => (
        task.isInput
          ? (<StyledInput
              key={task.id}
              onBlur={() => props.onInputBlur(task.id)}
              value={props.blurInputValue}
              onChange={props.onBlurInputChange}
              autoFocus
              maxLength="10"
            />)
          : (<Task
              onTaskDblClick={props.onTaskDblClick}
              onDoneBtnClick={props.onDoneBtnClick}
              onDeleteBtnClick={props.onDeleteBtnClick}
              task={task}
              id={task.id}
              key={task.id}
              title={task.title}
              isDone={task.isDone}
            />)
      ))}
    </main>
  );
};

export default Main;
