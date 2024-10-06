
// string reverse //

function reverse(number){
let str=" ";
let len = number.length;
for(i=len-1;i>=0;i--){
    str+=number[i];
}
console.log(str);
}
reverse("abcdefgh");