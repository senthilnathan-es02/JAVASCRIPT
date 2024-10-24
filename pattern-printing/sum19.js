// Question: Create a JavaScript function that finds and returns the nth prime number.
//  For example, if the input is 5, the function should return 11,
//  as the first five prime numbers are 2, 3, 5, 7, and 11.

function AddPrime(num){
    let sum = 0;
    isprime=true;
    for(i=2;i<=num;i++){
        if(i<=1){
            isprime = false;
        }
        else{
            for(j=2;j<=Math.sqrt(i);j++){
                if(i%j===0){
                    isprime=false;
                }
                
            }
        }
    }

    if(isprime){
        sum+=i;
    }
    else{
        isprime =true;
    }
    console.log(sum);


}AddPrime(20);






