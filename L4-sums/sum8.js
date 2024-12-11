let number = [];
let count = 0;
for(i=0;i<number.length;i++){
    if(number[i]%2!==0){
        // count++;
        count+=number[i];
        }
}
if(count%2!==0){
    console.log("YES");
}
else{
    console.log("NO");
}