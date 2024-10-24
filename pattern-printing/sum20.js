function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }


  
  function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
  }

function calculateLCMAndGCD(numbers) {
    let lcmResult = findLCM(numbers[0], numbers[1]);
  
    let gcdResult = findGCD(numbers[2], numbers[3]);
  
    console.log( lcmResult);
    console.log(gcdResult);
  }
  

  let numbers = [12, 18, 24, 36];

  calculateLCMAndGCD(numbers);
  