// You are given an array of numbers. Your task is to find the sum of all the numbers in the array that are divisible by 3.

let numbers = [3, 5, 9, 12, 7, 15];
let sum=0;
for(i=0;i<numbers.length;i++){
    if(numbers[i]%3==0){
        sum=+numbers[i];

    }
}
console.log(sum);