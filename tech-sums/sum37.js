// You are given an array of integers. Your task is to count how many times a specific number appears in that array.

let array= [1, 2, 3, 1, 4, 1];
let count=0;
for(i=0;i<array.length;i++){
    if(array[i]===1){
     count++; }
}
console.log(count);