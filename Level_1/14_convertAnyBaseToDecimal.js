//  Write a program to convert  Any BaseDecimal to Decimal.

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

console.log(convertAnyBaseToDecimal(1375, 8)); // 765
