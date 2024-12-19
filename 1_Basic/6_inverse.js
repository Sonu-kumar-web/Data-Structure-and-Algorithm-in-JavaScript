// The inverse of a number is as the number created by interchanging the face value and index of digit of a number
// input- 426135
// output- 416253
// Constrain- No number are repeated and no number are missing or duplicate in a given range.

const reverseOfANumber = (num) => {
  let count = 1,
    revNum = 0;
  while (num > 0) {
    revNum += count * Math.pow(10, (num % 10) - 1);
    count += 1;
    num = Math.floor(num / 10);
  }
  return revNum;
};

console.log(reverseOfANumber(426135));
