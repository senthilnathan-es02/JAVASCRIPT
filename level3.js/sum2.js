// 2. Given a positive Integer, write a function isPrime(num)
//  which will return true if its a prime or false otherwise.

let a=4;
function prime(){
   let  isPrime =true;
   if(a<=1){
    isPrime = false;
   }
   else {
    for(i=2;i<=Math.sqrt(a);i++){
        if(a%i==0){
        isPrime = false;
        }
    }
   } 

   if(isPrime){
    console.log("Prime number");
   }
   else{
    console.log("Not prime number");
   }

}prime();