function divisoion (array){

let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];

}
if(sum%3==0){
    return true;

}
else{
    return false; 
}
}
let array = [1,2,3,4,5,6];
console.log(divisoion(array));