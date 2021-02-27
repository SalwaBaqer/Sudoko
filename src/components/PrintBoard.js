import Board from "./Boards.js";
const PrintBoard = () => {
  Board.map((box) => <p>{box}</p>);
};
export default PrintBoard;
