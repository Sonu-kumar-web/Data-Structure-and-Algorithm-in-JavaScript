// Write a program to convert from decimal to any base.
const convertDecimalToAnyBase = (decimalNum, base) => {
  let count = 0,
    newNumber = 0;
  while (decimalNum > 0) {
    let rem = (decimalNum % base) * Math.pow(10, count);
    newNumber += rem;
    decimalNum = Math.floor(decimalNum / base);
    count++;
  }
  return newNumber;
};

console.log(convertDecimalToAnyBase(784, 8)); // 1375
console.log(convertDecimalToAnyBase(765, 2)); // 1011111101
