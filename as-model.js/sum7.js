// You have an array of integers. 
// Write a function that returns the count of the even numbers in the array.

let array =[12,34,56,7]
let a=0;
for (i=0;i< array.length;i++){
    sum=array[i];
    if(sum%2==0){
        a=a+1;
       
    }
  
}
console.log(a)