import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 550px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 4px solid #ededed;
`;

const StyledH1 = styled.h1`
  color: rgba(175, 47, 47, 0.15);
  font-size: 100px;
  font-weight: 100;
  width: auto;
`;

const StyledInput = styled.input`
  max-width: 300px;
  font-size: 25px;
  margin-bottom: 3px;
`;

const Button = styled.button`
  position: relative;
  background-color: #4CAF50;
  border: none;
  font-size: 29px;
  color: #FFFFFF;
  width: auto;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: 5px;
  margin-bottom: 3px;
`;

export { Button, StyledHeader, StyledInput, StyledH1 };
