// 1. *Average of Scores*
//    Write a program to create an array of 5 exam scores.
//  Calculate and print the average of the scores.

let array = [90,80,70,60]; 
let sum=0;
let avg=0;
let len=array.length;
for(i=0;i<len;i++){
   sum+=array[i];
   avg=sum/len;
}
console.log(avg);




