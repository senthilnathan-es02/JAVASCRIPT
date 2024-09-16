let n=5;
function calculateFactorial(n){
    let i=1;
    let fant=1;
    while(i<=n){
        fant=i*n;
        i++;
    }
   console.log(fant);
}
calculateFactorial(n);