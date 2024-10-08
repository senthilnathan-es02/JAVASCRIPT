// 3. Given a 2 numbers, find the LCM between the two numbers. 
function LCM(s,a){
    let n =s*a;
    for(i=1;i<=n;i++){
        if(i%s===0&&i%a===0){
            return i;
        }
    }
}
console.log(LCM(10,30));