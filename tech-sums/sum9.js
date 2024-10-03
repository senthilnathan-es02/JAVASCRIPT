function oddnumbers(odd){
    let sum=0;
    for(i=0;i<odd.length;i++){
        if(odd[i]%2!==0){
            sum+=odd[i];
        }
    }
    if(sum%3==0){
        return true;
    }
    else{
        return false;
    }

}
let odd = [1,2,3,4,5,6,7,8,9];
console.log(oddnumbers(odd));