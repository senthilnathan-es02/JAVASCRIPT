// You are given an array of numbers. Your task is to calculate the average (mean) of all the numbers in the array.

let numbers = [10, 20, 30, 40, 50];
let sum=0;

for(i=0;i<numbers.length;i++){
    sum+=numbers[i];
  

}
let avg = sum / numbers.length;

console.log(avg);