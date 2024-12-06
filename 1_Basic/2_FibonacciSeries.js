// 0 1 1 2 3 5
const fibonacciSeries = (n) => {
  let a = 0,
    b = 1,
    c = a + b;
  console.log(a);
  console.log(b);

  while (c <= n) {
    console.log(c);
    a = b;
    b = c;
    c = a + b;
  }
};

fibonacciSeries(20);
