// Write a program to reverse a number;
const reverseANumber = (n) => {
  let revNum = 0;
  let temp = Math.pow(10, countDigit(n));

  while (n > 0) {
    let r = n % 10;
    revNum = revNum + r * temp;
    temp = temp / 10;
    n = Math.floor(n / 10);
  }

  return revNum;
};

const countDigit = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count - 1;
};

console.log(reverseANumber(2314));
