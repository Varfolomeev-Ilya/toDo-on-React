import React from 'react';

const FooterComponents = () => {



  return (
    <div>
     <footer className="todo__Footer">
        <span className="todo-count" id="count">
          <strong>0</strong>
          items left
        </span>
        <ul className="todo__Footer__filters">
          <li>
            <a className="selected" href="#/" id="all">All</a>
          </li>
          <li>
          <a className="active" href="#/active" id="active">Active</a>
          </li>
          <li>
          <a className="completed" href="#/completed" id="completed">Completed</a>
          </li>  
        </ul>
        <button className="clear-completed">
          Clear completed [
            <span id="completed-count">0</span>
          ]          
        </button>
     </footer>
    </div>
  );
}

export default FooterComponents;
