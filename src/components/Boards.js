import {
  Square,
  Row,
  Col,
  Grid,
  RowRight,
  RowLeft,
  Colinput,
} from "../styles.js";

let medium = [
  "000023087600000500010700000009000004050872030800000700000005090002000006530960000",
  "000026003005000607000001940030000200709010806008000090084100000502000400300650000",
  "000030190000005000192000005000007048078000630420100000200000983000700000081090000",
  "000038106030000000000700350006140900000975000003062400021007000000000070704310000",
  "000042036005100000000800007047060001800000003600080940200004000000001400490650000",
  "000048000001000408008102060000020080890000052030070000040207900509000800000390000",
  "000050000008724500050080049783000000000000000000000368190040050005839400000070000",
  "000057900080009000020040050900004008001000600200100007030080010000300040005970000",
  "000060000060008700209005000057000041010050080980000250000400103001700020000080000",
  "000069230620030000000700000268000001370000052900000376000001000000040025037520000",
  "000070923000800000002090060620000040000746000070000035010060700000001000456020000",
  "000079203370120000000000001009300500830000029007005800600000000000061048701580000",
  "000080000003000070420006500506193700000000000009572106002300045090000800000060000",
  "000089001500000007009006805610005000000000000000200093807400200900000008100930000",
  "000090000000073600509060170050400006068000750400006080076080502004620000000040000",
  "000098260300000000000650080060000540900205008054000090040086000000000007025970000",
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRamdomBoardFor(array) {
  var idx = randomIntFromInterval(0, array.length - 1);
  return array[idx];
}
let SquareMaker = (x, board) => {
  let y = board;
  let increment = 0;
  let line = [];
  let sqr = [];

  for (let counter = 0; counter < 3; counter++) {
    for (let i = 0; i < 3; i++) {
      if (y.charAt(x + increment) === "0") {
        sqr.push(` `);
        x = x + 1;
      } else {
        sqr.push(y.charAt(x + increment));
        x = x + 1;
      }
    }
    // sqr.push(line);
    // line = [];
    increment = increment + 6;
  }
  return sqr;
};
let Boards = () => {
  let board = getRamdomBoardFor(medium);
  let y = board;
  let squares = [];
  // let line = [];
  // let puzzle = [];
  // for (let counter = 0; counter < 90; counter++) {
  //   if (counter > 0 && counter % 9 === 0) {
  //     puzzle.push(line);
  //     line = [];
  //   }
  //   line.push(board.charAt(counter));

  //*******better to have you data and data handling in another js file and by data i mean the ⬇️ and ⬆️ *********
  let squareOne = SquareMaker(0, y);
  let squareTwo = SquareMaker(3, y);
  let squareThree = SquareMaker(6, y);
  let squareFour = SquareMaker(27, y);
  let squareFive = SquareMaker(30, y);
  let squareSix = SquareMaker(33, y);
  let squareSeven = SquareMaker(54, y);
  let squareEight = SquareMaker(57, y);
  let squareNine = SquareMaker(60, y);

  squares = [
    squareOne,
    squareTwo,
    squareThree,
    squareFour,
    squareFive,
    squareSix,
    squareSeven,
    squareEight,
    squareNine,
  ];
  //===================== check line 73 =====================

  //===== better to one component for the following, no need to do that 9 times ====
  const printSone = squareOne.map((box) =>
    //===== i added ternary u know why
    box === " " ? (
      <Colinput color={"#98B9F2"} />
    ) : (
      <Col size={3} color={"#98B9F2"}>
        {box}
      </Col>
    )
  );
  const printStwo = squareTwo.map((box) =>
    box === " " ? (
      <Colinput color={"#FFEE93"} />
    ) : (
      <Col size={3} color={"#FFEE93"}>
        {box}
      </Col>
    )
  );
  const printSthree = squareThree.map((box) =>
    box === " " ? (
      <Colinput color={"#DDA6B0"} />
    ) : (
      <Col size={3} color={"#DDA6B0"}>
        {box}
      </Col>
    )
  );
  const printSfour = squareFour.map((box) =>
    box === " " ? (
      <Colinput color={"#B6CEF6"} />
    ) : (
      <Col size={3} color={"#B6CEF6"}>
        {box}
      </Col>
    )
  );
  const printSfive = squareFive.map((box) =>
    box === " " ? (
      <Colinput color={"#FFF3AD"} />
    ) : (
      <Col size={3} color={"#FFF3AD"}>
        {box}
      </Col>
    )
  );
  const printSsix = squareSix.map((box) =>
    box === " " ? (
      <Colinput color={"#E3B5BD"} />
    ) : (
      <Col size={3} color={"#E3B5BD"}>
        {box}
      </Col>
    )
  );
  const printSseven = squareSeven.map((box) =>
    box === " " ? (
      <Colinput color={"#C9DAF8"} />
    ) : (
      <Col size={3} color={"#C9DAF8"}>
        {box}
      </Col>
    )
  );
  const printSeight = squareEight.map((box) =>
    box === " " ? (
      <Colinput color={"#FFF3AD"} />
    ) : (
      <Col size={3} color={"#FFF3AD"}>
        {box}
      </Col>
    )
  );
  const printSnine = squareNine.map((box) =>
    box === " " ? (
      <Colinput color={"#E3B5BD"} />
    ) : (
      <Col size={3} color={"#E3B5BD"}>
        {box}
      </Col>
    )
  );

  //======== important note line 97 ^^^^^^ ================

  // const printS = squares.map((box) => <Square>{box}</Square>);

  return (
    //margin by salwa
    <div style={{ margin: "20px" }}>
      <RowLeft>
        {printSone}
        {printSfour}
        {printSseven}
      </RowLeft>
      <RowLeft>
        {printStwo}
        {printSfive}
        {printSeight}
      </RowLeft>
      <RowLeft>
        {printSthree}
        {printSsix}
        {printSnine}
      </RowLeft>
    </div>
  );
};

export default Boards;
