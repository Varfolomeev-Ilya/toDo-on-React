import React from 'react';
import { StyledFooter, Ul, Li, A } from './FooterStyles';

function Footer(props) { 
  return (
    <StyledFooter>
      <Ul>
        <Li>
          <A>Items left: {props.checkTask}</A>
        </Li>

        <Li>
          <A>Completed: {props.deleteTask}</A>
        </Li>

        <Li>
          <A>All: {props.allTasks}</A>
        </Li> 

        <Li>
          <button>Clear complited</button>
        </Li>
      </Ul>
    </StyledFooter>
  );
};

export default Footer;
