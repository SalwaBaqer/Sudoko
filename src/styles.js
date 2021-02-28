import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.p`
  color: #bedcfe;
  background-color: #170f11;
  border-style: groove;
`;

export const Square = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  color: red;
  background-color: aqua;
`;

export const Row = styled.div`
  display: grid;
  justify-self: stretch;
  float: center;
  text-justify: auto;
`;
