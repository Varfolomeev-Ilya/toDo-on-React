import React from 'react';
import {Footers,Ul,Li,A} from './FooterStyles'
class Footer extends React.Component {
 
render() { 
    return (
      <div>
        <Footers>
          <Ul className="filters">
          <Li>
          <A>Items left: {this.props.checkTask}</A>
          </Li>
          <Li>
          <A>Completed: {this.props.deleteTask}</A>
          </Li>
          <Li>
          <A>All: {this.props.allTasks}</A>
          </Li> 
          <Li>
            <button >Clear complited</button>
          </Li>
          </Ul>
        </Footers>
      </div>
    )
  };
}

export default Footer;


