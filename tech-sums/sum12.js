function countVowels(vowels){
    let count=0;
    for(i=0;i<vowels.length;i++){
        if(vowels[i]=="a"||
            vowels[i]=="e"||
            vowels[i]=="i"||
            vowels[i]=="o"||
            vowels[i]=="u"){

                 count++;

        }
        
        return count;
    }
    

}
let r=countVowels("hello world");  // Output: 3
console.log(r);








countVowels("javascript");   // Output: 3
countVowels("sky");          // Output: 0
