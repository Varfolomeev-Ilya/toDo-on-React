import React from 'react';

const SectionComponents = () => {



  return (
    <div>
      <section className="todo__Body" id="main" >
        <input className="toggle-all" id="toggle-all" type="checkbox" checked="true"/>
          <label for="toggle-all"/>
          <ul className="todo-list">
            <li className="completed" id="3" data-id="3"></li>
            <li className="completed"  id="4" data-id="4"></li>
          </ul>
      </section>
    </div>
  );
}

export default SectionComponents;