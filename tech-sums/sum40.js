// You are given a string containing only alphabetical characters. Your task is to count the number of consonants in the string.

let letter ="string containing only alphabetical characters";
let count =0;
for(i=1;i<letter.length;i++){
 if(letter[i]==="b"||
    letter[i]==="c"||
    letter[i]==="d"||
    letter[i]==="f"||
    letter[i]==="g"||
    letter[i]==="h"||
    letter[i]==="j"||
    letter[i]==="k"||
    letter[i]==="l"||
    letter[i]==="m"||
    letter[i]==="n"||
    letter[i]==="b"||
    letter[i]==="p"||
    letter[i]==="q"||
    letter[i]==="r"||
    letter[i]==="s"||
    letter[i]==="t"||
    letter[i]==="v"||
    letter[i]==="w"||
    letter[i]==="x"||
    letter[i]==="y"||
    letter[i]==="z"){
  count++;
 }
}console.log(count);
