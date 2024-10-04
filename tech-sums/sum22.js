// You are given an array of numbers. Your task is to find the sum of all the numbers at even indices (index 0, 2, 4, etc.) in the array.

let number =[10,20,30,40,50];
let sum =0;
for(i=0;i<number.length;i+=2){
    sum+=number[i];
}console.log(sum);