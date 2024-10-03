let sumEvenNumbers=([1, 2, 3, 4, 5, 6]);  // Output: 12
let count=0;
let sum=0;
for(i=0;i<sumEvenNumbers.length;i++){
   if( sumEvenNumbers[i]%2==0){
    sum+=sumEvenNumbers[i];
   }
}
console.log(sum);