// Print the below patter if n = 3.

let n =3;
for(i=1;i<=n;i++){
    let str=""
    for(j=3;j>=i;j--){
str+=" "

    }
    for(k=1;k<=i;k++){
        str+=i+" ";
    }
    console.log(str)

}
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n;j++){
        str+=" ";
    }
    for(let k=n;k>i;k--){
        str+=n-i+" "
    }
    console.log(str)
}