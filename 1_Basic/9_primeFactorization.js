const primeFactors = (num) => {
  for (let f = 2; f * f <= num; f++) {
    while (num % f == 0) {
      console.log(f, " ");
      num = Math.floor(num / f);
    }
  }

  //   Special case (example - 46)
  if (num > 1) console.log(num);
};

primeFactors(46);
