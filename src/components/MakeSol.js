import board from "./board.js";

function makeBoard({ puzzle }) {
  // create initial count object to keep track of conflicts per number value
  const rows = Array.from(Array(9).keys()).map(() => set);
  const columns = Array.from(Array(9).keys()).map(() => makeCountObject());
  const squares = Array.from(Array(9).keys()).map(() => makeCountObject());
  const result = puzzle.map((row, i) =>
    row.map((cell, j) => {
      if (cell) {
        rows[i][cell] += 1;
        columns[j][cell] += 1;
        squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)][cell] += 1;
      }
      return {
        value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
        prefilled: !!puzzle[i][j],
      };
    })
  );
}
