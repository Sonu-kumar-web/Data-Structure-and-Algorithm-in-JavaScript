const isPrimeNumber = (n) => {
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return "Not a Prime number";
  return "Prime number";
};
console.log(isPrimeNumber(11));
