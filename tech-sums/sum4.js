// Write a function to find the largest number in an array of integers.

let array=[12,34,56,78,90];
let largest =0;
for(i=1;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i];

    }
}
console.log(largest);