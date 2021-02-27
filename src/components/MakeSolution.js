import board from "./board.js";

const MakeSolution = () => {
  const getRandomInt = () => {
    let min = 1;
    let max = 10;
    return Math.floor(Math.random() * (max - min) + min);
  };

  for (let counter = 0; counter < 81; counter++) {
    let iRow = 0;
    let jColumn = 0;

    let solutionChoice = getRandomInt();
    for (iRow = 0; iRow < 9; iRow++) {
      if (board[iRow][jColumn] !== solutionChoice) {
        board[iRow][jColumn] = solutionChoice;
        solutionChoice = getRandomInt();
      } else if (board[iRow][jColumn] === solutionChoice)
        for (jColumn = 0; jColumn < 9; jColumn++) {
          if (board[iRow][jColumn] !== solutionChoice) {
            board[iRow][jColumn] = solutionChoice;
            solutionChoice = getRandomInt();
          }
          solutionChoice = getRandomInt();
        }
    }
    return board.map((box) => <h1>{box}</h1>);
  }
};

export default MakeSolution;
