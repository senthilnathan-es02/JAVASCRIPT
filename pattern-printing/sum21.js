function lcm(s,a){
    let max = Math.max(s,a);
    for(i=max;i<=100;i++){
        if(i%s==0&&i%a==0){
            console.log("LCM "+i);
            break;

        }
    }
}lcm(12,18);


function gcd(a,b){
    let min = Math.min(a,b);
    for(i=min;i<=100;i--){
        if(a%i==0&&b%i==0){
        console.log("GCD "+i);
        break;
        }
    }

} gcd(12,34);
