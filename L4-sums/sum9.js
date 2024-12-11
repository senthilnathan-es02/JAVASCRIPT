function binarysearch(array,target){
    let low = 0;
    let high = array.length -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(array[mid]===target){
            return mid;
        }
        else if (array[mid]<targer){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
            return "Not found";
    }

    
}console.log(binarysearch([1,2,3,4,5,6,7,8,9],5));