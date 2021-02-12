import React from 'react';
import styled from 'styled-components'

const Header = styled.header`
  max-width: 700px;
  max-height: 200px;
  padding-bottom: 20px;
  margin: 0 auto;
`;


const Title = styled.h1`
 font-size: 100px;
 font-weight: 100;
 text-align: center;
 color: rgba(175, 47, 47, 0.15);
`;


const HeaderComponents = () => {
  return (
    <div>
       <Header>
        <Title>Todo list</Title>
         </Header>
    </div>
  );
}

export default HeaderComponents;