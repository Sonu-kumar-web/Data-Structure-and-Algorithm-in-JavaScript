// Rotate a given number n, with k times
// Input - n = 975432, k = 2
// Output -  329754

const rotateANumber = (n, k) => {
  let count = countDigitsOfN(n);

  //   Special case (if number of rotation is equal to number of digits then number will be same)
  k = k % count;

  //   If k is negative
  if (k < 0) k = k + count;

  a = n % Math.pow(10, k);

  a = a * Math.pow(10, count - k);
  b = Math.floor(n / Math.pow(10, k));

  return a + b;
};

const countDigitsOfN = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
};

console.log(rotateANumber(23576, 2));
