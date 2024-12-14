

// Problem: Given an array of integers, count how many numbers are even and how many are odd.
// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }

function number(array){
    
    let oddcount = 0;
    let evencount =0;
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            evencount++;
        }
        else{
            oddcount++;
        }

    }
    
return {oddcount ,evencount};

}console.log(number( [1, 2, 3, 4, 5, 6]));