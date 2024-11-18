let n = 5;
let a = 0;
let b = 1;
let c = 0;
sum = a+" "+b+" ";
for(i=1;i<=n;i++){
    c = a+b;
    sum+=c+" ";
    a = b;
    b = c;
    
}
console.log(sum);

