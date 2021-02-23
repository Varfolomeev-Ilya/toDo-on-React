import styled from "styled-components";

const StyledFooter = styled.footer`
  max-width: 550px;
  height: 50px;
  margin: 0 auto;
  background-color: #fff;
  border: 4px solid #ededed;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
`;

const StyledLi = styled.li`
  font-size: 24px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

const StyledButton = styled.button`
  cursor: pointer
`;

export { StyledFooter, StyledUl, StyledLi, StyledA, StyledButton }
