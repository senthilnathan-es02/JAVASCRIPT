// Write a JavaScript function to count how many numbers in an array are greater than 10.

let number = [3,4,56,78,90,23,50];
let count =0;
for(i=0;i<number.length;i++){
    if(number[i]>10){
        count++;
    }
    
}
console.log(count);