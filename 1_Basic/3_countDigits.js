// Count digits of a given number
const countDigits = (n) => {
  count = 0;
  while (n > 0) {
    n = Math.floor(n / 10); // in Javascript "/" return float value
    count++;
  }
  return count;
};

console.log(countDigits(12345)); // 5
