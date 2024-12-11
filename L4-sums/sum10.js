let n = 3;
for(i=1;i<=n;i++){
    let str="";
    for(j=0;j<i;j++){
        str+=i+" ";
    }
    for(k=0;k<(n-i)*2;k++){
        str+=" ";
    }
    for(j=0;j<i;j++){
        str+=" "+i;
    }
    console.log(str);
}