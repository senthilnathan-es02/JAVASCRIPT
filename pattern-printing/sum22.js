function main(number){
console.log(lcm(number[0],number[1]));
console.log(gcd(number[2],number[3]));

}main([12,34,56,67]);

function lcm(num1,num2){
    let mul = num1 * num2;
    for(i=1;i<=mul;i++){
        if(i%num1==0&&i%num2==0){
            return "LCM is "+ i;
        }
    }

}

function gcd(num3,num4){
    let min =Math.max(num3,num4);
    for(i=min;i<=100;i--){
        if(num3%i==0&&num4%i==0){
            return "GCD is "+i;
        }
    }
}