import styled from "styled-components";

const StyledFooter = styled.footer`
  max-width: 550px;
  height: 50px;
  margin: 0 auto;
  background-color: #fff;
  border: 4px solid #ededed;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  font-size: 24px;
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
`;

export { StyledFooter, Ul, Li, A }
