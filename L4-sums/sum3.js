// Given an array of strings, find the string which comes first alphabetically without using any library functions. 

let array = ["senthil","nathan","akshaya"];
let big = array[0];
for(i=0;i<=array.length;i++){
    if(big>array[i]){
        big=array[i];
    }
}
console.log(big);