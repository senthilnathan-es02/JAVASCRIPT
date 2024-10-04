// You are given an array of numbers and a specific number x.
//   Your task is to count how many times x appears in the array.

let numbers = [1, 2, 3, 1, 4, 1, 5];
let x = 1;
let count =0;
for (i=0;i<numbers.length;i++){
    if(numbers[i]===x){
        count++;
    }
}console.log(count);
