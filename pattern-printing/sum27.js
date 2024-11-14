function digitSumFact(n) {
    let num = n; 
    let sum = 0;
    while ( num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.trunc(num / 10); 
    }

    if(n == sum) {
        console.log("Strong");
    }
    else {
        console.log("Not Strong");
    }
}

function factorial(n) {
    let fact = 1;
    for (let i  = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}digitSumFact(1,4,5);
