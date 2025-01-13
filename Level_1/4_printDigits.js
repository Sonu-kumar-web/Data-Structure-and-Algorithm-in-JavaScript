//  Print each digits of a given number in a new line
// Input -> 123
// Output-> 1
//          2
//          3

const printDigits = (n) => {
  // 1. Calculate total count
  let pow = Math.pow(10, digitCount(n));
  while (pow > 0) {
    console.log(Math.floor(n / pow));
    n = Math.floor(n % pow);
    pow = Math.floor(pow / 10);
  }
};

const digitCount = (n) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count - 1;
};

printDigits(35200);
