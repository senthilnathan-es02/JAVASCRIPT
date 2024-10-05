// You are given an array of numbers. Your task is to find the sum of all even numbers in the array.

let number =[1,2,3,4,5,6,7,8,9];
let even =0;
let sum =0;
for(i=0;i<number.length;i++){
    if(number[i]%2===0){
        even++;
    }
    sum+=number[i];
}
console.log(sum);