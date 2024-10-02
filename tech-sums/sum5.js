Input: [1, 2, 3, 4, 5]
Output: 3  // (1, 3, and 5 are odd)


let oddnumber =[1,2,3,4,5];
let ln=oddnumber.length;
let oddcount=0;
for(i=0;i<ln;i++){
    if(oddnumber[i] %2 !== 0){
        oddcount++;

    }

}
console.log(oddcount);
