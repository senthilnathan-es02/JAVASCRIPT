let n =10;
let m = 20;
isprime = true;
for(i=n;i<=m;i++){
    if(i<=1){
        isprime = false;
    }
    else{
        for(j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
            isprime = false;
            }
        }

    }
    if(isprime){
        console.log(i);
    }
    else{
        isprime = true;
    }
}


