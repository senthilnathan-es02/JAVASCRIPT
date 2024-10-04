// You are given an array of numbers. Your task is to count how many numbers are positive and how many are negative.

let numbers = [-3, 2, -1, 5, -6, 7];
let positiveCount =0;
let negativeCount =0;
for(i=0;i<numbers.length;i++){
    if(numbers[i]>0){
     positiveCount++;
    }
    else if(numbers[i]<0){
        negativeCount++;

    }
}console.log(positiveCount,negativeCount);