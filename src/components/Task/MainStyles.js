import styled from "styled-components";

const Main = styled.main`
  font-weight: 300;
  margin: 0 auto;
  max-width: 550px;
  height: auto;
  background-color: #fff;
  border: 4px solid #ededed;
`;

const P = styled.p`
  height: auto;
  word-break: break-all;
  width: 350px;
  font-size: 25px;
 
`;

const ActionP = styled(P)`
  width: 25px;
  cursor: pointer;
`;

export {Main, P, ActionP};
