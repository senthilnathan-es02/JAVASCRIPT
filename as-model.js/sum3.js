let array =[20,30,50,70]
let sum=0;
let answer=array.length;
let avg=0;
for (i=0;i<answer;i++){
    sum+=array[i];
    avg=sum/answer;
}
console.log(avg);