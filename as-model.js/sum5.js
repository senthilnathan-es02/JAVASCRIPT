// You are given an array of student grades.
//  Write a function that calculates the average grade.

let array =[20,30,40,50]
let sum =0;
let avg=0;
let length = array.length;
for (i=0;i<length;i++){
    sum+=array[i];
    avg=sum/length;
}
console.log(avg);