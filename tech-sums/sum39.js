// Input: "I love programming in JavaScript"

// Output: "programming" (because it has the most letters)

let letter ="I love programming in JavaScript";
let largest =" ";
let word=letter.split(' ');
for(i=0;i<word.length;i++){
    if(word[i].length>largest.length){
        largest=word[i];
    }
    
}console.log(largest);