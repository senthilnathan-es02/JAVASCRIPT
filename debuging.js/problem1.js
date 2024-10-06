function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  let r=sumNumbers(10);
  console.log(r);
  