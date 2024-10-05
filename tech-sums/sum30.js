// You are given an array of integers. Your task is to move all the zeroes in the array to the end while maintaining the relative order of the non-zero elements.

let number = [0, 1, 0, 3, 12];
let answer =number.sort((a,b)=>a-b);
console.log(answer);

