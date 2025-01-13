// 15. Write a program to convert  Any Base to Any Base.

const convertAnyBaseToAnyBase = (num, sourceBase, destinationBase) => {
  let anyBaseToDecimalNumber = convertAnyBaseToDecimal(num, sourceBase);
  let decimalToAnyBaseNumber = convertDecimalToAnyBase(
    anyBaseToDecimalNumber,
    destinationBase
  );

  return decimalToAnyBaseNumber;
};

const convertAnyBaseToDecimal = (num, base) => {
  let count = 0,
    newNumber = 0;

  while (num > 0) {
    rem = (num % 10) * Math.pow(base, count);
    newNumber += rem;

    num = Math.floor(num / 10);
    count++;
  }

  return newNumber;
};

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

console.log(convertAnyBaseToAnyBase(765, 8, 5)); // 4001
console.log(convertAnyBaseToAnyBase(4001, 5, 8)); // 765
