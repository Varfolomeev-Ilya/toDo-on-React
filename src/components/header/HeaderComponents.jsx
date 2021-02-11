import React from 'react';

const HeaderComponents = () => {



  return (
    <div>
      <header className="todo__Header">
       <div className="Header__title">
        <h1>todos</h1>
        <input class="new-todo" id="new-todo"  placeholder="What needs to be done?" autofocus=""></input>
       </div>
       </header>
    </div>
  );
}

export default HeaderComponents;
