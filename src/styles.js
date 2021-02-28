import styled from "styled-components";

export const Title = styled.h1`
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  background: #2e2e3a;
`;

export const Square = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  color: red;
  background-color: honeydew;
`;

// export const Row = styled.div`
//   display: grid;
//   justify-self: stretch;
//   float: center;
//   text-justify: auto;

export const Numbers = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 10px;
  float: left;
  align-content: center;
`;
export const Grid = styled.div``;

export const RowRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: right;
  width: calc(100% * (1 / 3));
`;
export const RowLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: left;
  width: calc(100% * (1 / 3));
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  align-content: center;
  width: calc(100% * (1 / 3));
  &.label {
  }
`;

// export const Col = styled.button`
//   display: inline-block;
//   background-color: ${(props) => props.color};
//   margin: 10px 0 0 2%;
//   flex-grow: 1;
//   height: 10px;
//   width: calc(100% * (1 / 3) - 10px - 1px);
// `;
export const Col = styled.label`
  flex: 1 3 33%;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 0.2px;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.color};
`;
