// You are given an array of numbers and a value x. Your task is to find the sum of all numbers in the array that are greater than x.

let number =[12,34,56,67,78];
let x=34;
let sum =0;
for(i=0;i<number.length;i++){
    if(number[i]>x){
        sum+=number[i];

    }
}console.log(sum);