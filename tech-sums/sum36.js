// You are given an array of integers. Your task is to find the maximum number in that array.

let number =[-1, -5, -3, -2];
let largest =[0];
for(i=0;i<=number.length;i++){
    if(largest>number[i]){
        largest=number[i];
    }
    
}console.log(largest);

