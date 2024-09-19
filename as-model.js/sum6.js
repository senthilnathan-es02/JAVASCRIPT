// You have an array of people ages. 
// Write a function that filters out people who are 18 years old or older.
let age=[20,10,8,18,30];

let length = age.length;
for(i=0;i<length;i++){
    let sum=age[i];
    if(18<=sum){
    console.log(sum);}
}
