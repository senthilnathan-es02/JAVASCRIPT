function lcm(s,a){
let max = s * a;
for(i=1; i<=max; i++){
    if(i%s===0 && i%a===0){
        console.log(i);
        break;
    }
}   
}lcm(12,18);


function gcd(a,b){
let max =  Math.max(a,b);
while(max>0){
    if(a%max==0 && b%max==0){
        console.log(max);
    }
    max--;
}

} gcd(12,34);
