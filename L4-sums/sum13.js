// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

function find(array){
    let index = 0;
    let big =array[0];
    for(i=1;i<array.length;i++){
        if(array[i]>big){
            array[i]=big;
            index = i
        }
    }
return index;

}console.log(find([5,4,3,7,5,2]));