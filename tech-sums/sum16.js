// Given an array of numbers, find the smallest number in the array (without using a function).

let number =[23,45,67,89,90];
let smallest =number[0];
for(i=1;i<number.length;i++){
    if(number[i]<smallest ){
        smallest = number[i];
    }
}console.log(smallest);