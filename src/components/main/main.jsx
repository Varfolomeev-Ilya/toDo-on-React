import React from 'react';
import Task from '../body/Task';


function Main(props) {

    return (
      <main>
      {props.tasks.map(task => (
      <Task
        checkTask={props.checkTask}
        deleteTask={props.deleteTask}
        task={task}
        id={task.id}
        key={task.id}
        />              
      ))}
      </main>
    ); 
};

export default Main;