import React from 'react';


class Footer extends React.Component {
 

  render() {
   
    return (
      <div>
         <footer className="footer">
      <ul className="filters">
      <li>
        <a href="3" className="all">Items left: {this.props.activeTasks}</a>
      </li>
      <li>
        <a href="2" className="selected">Completed: {this.props.doneTasks}</a>
      </li>
      <li>
        <a href="1" className="all todos">All: {this.props.tasks}</a>
      </li> 
      </ul>
      </footer>
      </div>
    )
  }
}

export default Footer;


