// Given an array of strings, return the String which has the maximum length.
//  arr = ["Ram", "Abraham", "Peter"] output is Abraham

function arraylength(array){
let max = "";
    for(i=0;i<array.length;i++){
if(array[i].length>max.length){
    array[i]=max;
}
    }
    return max;
    

}

const arr = ["Ram", "Abraham", "Peter"]
console.log(arraylength(arr))




