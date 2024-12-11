// Given a array of integers, count of number of occurrences of the maximum element in the array 

// Sample Input: 3 2 1 3

// Sample Output: 2

let array = [3,2,3,2,2];
let max = array[0];
let count = 0;
for(i=0;i<array.length;i++){
    if(max <array[i]){
        max = array[i];
        count = 1;
    }
    else if(array[i]==max){
        count++;
   }

}
console.log(count);

