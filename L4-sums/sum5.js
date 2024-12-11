// Given an array of positive integers sorted in ascending order (increasing order,
//   1st element is the smallest, Nth element is the largest), implement the binary search algorithm.


function binary(array, target){
array.sort((a,b)=>a-b);
    
let left  = 0;
let rigth = array.length-1;

while(left<=rigth){
    let mid = Math.floor((left + rigth)/2);

    if(array[mid]===target){
       return mid;
    }
    else if(array[mid]<target){
        left = mid + 1;
    }
    else{
        rigth = mid - 1;
    }
}
return "not found";
}



console.log(binary([6,5,7,1,4,2,9],5));
