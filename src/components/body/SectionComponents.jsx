import React from 'react';

const SectionComponents = () => {



  return (
    <div>
      <section className="todo__Body" id="main" >
        <input className="toggle-all" id="toggle-all" type="checkbox" checked="true"/>
          <label for="toggle-all"/>
          <ul className="todo-list">            
          </ul>
      </section>
    </div>
  );
}

export default SectionComponents;