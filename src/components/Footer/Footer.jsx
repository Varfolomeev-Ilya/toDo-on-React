import React from 'react';
import {Footers,Ul,Li,A} from './FooterStyles'
class Footer extends React.Component {
 
render() {
   
    return (
      <div>
         <Footers>
      <Ul className="filters">
      <Li>
        <A>Items left: {this.props.activeTasks}</A>
      </Li>
      <Li>
        <A>Completed: {this.props.doneTasks}</A>
      </Li>
      <Li>
        <A>All: {this.props.tasks}</A>
      </Li> 
      </Ul>
      <button onClick={() => this.props.clearTask}></button>

      </Footers>
      </div>
    )
  };
}

export default Footer;


