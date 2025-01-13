// Write a program to count the frequency of a given number.
const countDigitFrequency = (digit, num) => {
  let count = 0;
  while (num !== 0) {
    let currentDigit = num % 10;

    if (digit === currentDigit) count++;
    num = Math.floor(num / 10);
  }

  return count;
};

console.log(countDigitFrequency(2, 122422)); // 4
