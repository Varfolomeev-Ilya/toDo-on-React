import React from 'react';
import {Footers,Ul,Li,A} from './FooterStyles'
class Footer extends React.Component {
 
render() {
   
    return (
      <div>
         <Footers>
      <Ul className="filters">
      <Li>
        <A href="3" >Items left: {this.props.activeTasks}</A>
      </Li>
      <Li>
        <A href="2" >Completed: {this.props.doneTasks}</A>
      </Li>
      <Li>
        <A href="1" >All: {this.props.tasks}</A>
      </Li> 
      </Ul>
      </Footers>
      </div>
    )
  }
}

export default Footer;


