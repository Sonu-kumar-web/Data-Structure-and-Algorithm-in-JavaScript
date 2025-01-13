const calculateGCDAndLCM = (n1, n2) => {
  let tempN1 = n1,
    tempN2 = n2;

  while (n1 % n2 !== 0) {
    let rem = n1 % n2;
    n1 = n2;
    n2 = rem;
  }

  let GCD = n2;
  let LCM = (tempN1 * tempN2) / GCD;

  console.log("GCD = ", GCD);
  console.log("LCM = ", LCM);
};

calculateGCDAndLCM(5, 3);
