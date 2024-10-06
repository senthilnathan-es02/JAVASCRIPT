// You are given an array of n-1 integers in the range of 1 to n. There are no duplicates in the array, and one number is missing. Write a function to find the missing number.
 let number =[1,2,3,4,6,7,8,9];
 let sum=0;
  let sum1=35;
  
 for (i=0;i<number.length;i++){
    sum=sum+number[i];
    

 }
  sum1 = sum -sum1;
console.log(sum1);