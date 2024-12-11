// Given an array of integers, find the maximum in the array.

let array = [1,2,3,4,5,6,7,8,9];
let max = array[0];
for(i=0;i<=array.length;i++){
    if(max<array[i]) {
        max= array[i];

    }
    
}
console.log(max);

