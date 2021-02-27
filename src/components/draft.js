x = 0;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareOne = squareOne.push(sqr);

x = 3;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareTwo = SquareMaker(3, y);

x = 6;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareThree = squareOne.push(sqr);

x = 27;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareFour = squareOne.push(sqr);

x = 30;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareFive = squareOne.push(sqr);

x = 33;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareSix = squareOne.push(sqr);

x = 54;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareSeven = squareOne.push(sqr);

x = 57;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareEight = squareOne.push(sqr);

x = 60;
for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < 3; i++) {
    line.push(y.CharAt(x + increment));
    x = x + 1;
  }
  sqr.push(line);
  increment = increment + 9;
}
let squareNine = squareOne.push(sqr);

let squares = [
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
