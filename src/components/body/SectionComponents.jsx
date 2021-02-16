import React from 'react';
import ContextToDo from '../../components/contexts/ContextToDo';


class SectionComponents extends React.Component {
  
   static contextType = ContextToDo;
   newTodo = {value: this.state};
       

   
    render() {  
    return (
    <div>
      <ContextToDo.Provider value={this.state}/>
      <section className="todo__Body" id="main">
     <ul>
     <li>
     </li>
       </ul>
      </section>
    </div>
   );
  }
}

export default SectionComponents;