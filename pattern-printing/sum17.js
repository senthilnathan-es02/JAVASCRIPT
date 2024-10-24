// Given a two positive integers m and n, where m < n,
//  print the sum of all prime numbers between them.
//  For m = 5 and n = 10, 5 and 7 are prime numbers between 5 and 10 
// so the answer is 12.

let m = 5;
let n = 10
let sum =0;
isprime =true;
for(i=m;i<=n;i++){
    if(i<=1){
        isprime = false;
    }
    else{
        for(j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
            isprime = false;
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

