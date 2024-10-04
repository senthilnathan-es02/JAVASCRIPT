// You are given an array of numbers. Your task is to find the largest number in the array.

let numbers = [4, 1, 8, 12, 3];
let largest =0;
for(i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest =numbers[i];
    }
}console.log(largest);