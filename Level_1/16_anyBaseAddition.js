// Write a program to add two numbers of any base.
const additionOfAnyBase = (base, n1, n2) => {
  let sum = 0,
    c = 0;
  let tp = 1; // 10^0

  while (n1 > 0 || n2 > 0 || c > 0) {
    // Get last digit of n1 trunk it.
    let d1 = n1 % 10;
    n1 = Math.floor(n1 / 10);

    // Get last digit of n2 and trunk it.
    let d2 = n2 % 10;
    n2 = Math.floor(n2 / 10);

    // create final digit of sum
    let d = d1 + d2 + c;

    c = Math.floor(d / base);
    d = d % base;

    sum = sum + d * tp;
    tp = tp * 10;
  }
  return sum;
};

console.log(additionOfAnyBase(8, 597, 435)); // 1254
