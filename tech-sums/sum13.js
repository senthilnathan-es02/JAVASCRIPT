// Write a JavaScript function that checks whether a given number is even or odd.

function oddeven(num){
    for (i=0;i<num.length;i++){
        if(num[i]%2==0){
            return num + "even";

        }
        else{
            return num + "odd";
        }
        
    }


}
let answer=oddeven([1]);
console.log(answer);
