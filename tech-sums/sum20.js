let number =[1,2,3,4,5,6,7];
let sum=0;
for(i=0;i<number.length;i++){
    if(number[i]%2==0){
        sum+=number[i];
    }
}
console.log(sum);