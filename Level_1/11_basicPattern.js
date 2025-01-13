const printRightTriangle = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i)
        // To print in same line
        process.stdout.write("*  ");
    }
    console.log();
  }
};

printRightTriangle(4);
