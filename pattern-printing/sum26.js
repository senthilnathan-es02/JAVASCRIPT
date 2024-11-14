function isBeautifulArray(arr) {
    // Calculate the sum of all elements in the array
    let sum = 0;
    for (i=1;i<arr.length;i++) {
      sum += arr[i];
    }
  
    // Check if sum is divisible by 2, 3, and 5
    if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  }isBeautifulArray([5, 25, 35, 30]);
  
