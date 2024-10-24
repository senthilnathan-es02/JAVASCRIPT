// Question: Write a JavaScript function that takes a number n as input and returns the sum of all prime numbers
//  less than or equal to n. For example, if n = 20,
//  the prime numbers less than or equal to 20 are 2, 3, 5, 7, 11, 13, 17, and 19, and the sum would be 77.

let  n = 20;
let sum =0;
isprime =true;
for(i=2;i<=n;i++){
    if(n <= 1){
        isprime =false;
    }
    else{
        for(j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isprime=false;
            }
        }
    }
        
    if(isprime){
        sum+=i;
    }
    else{
        isprime = true;
    }


}
console.log(sum);





