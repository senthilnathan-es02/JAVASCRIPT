let carNames =["BMW","ford","suzkui","farzic"];
let count =0;
let carextra="farzic";
for(i=0;i<carNames.length;i++){
    if(carNames[i]===carextra){
        count++;

    }
}
if(count>0){
    console.log(true); 
}
else{
    console.log(false);
}
console.log(carextra);


