// Write code to print the below pattern, if n = 3
// 1       1

// 2 2     2 2

// 3 3 3 3 3 3


let n= 3;
for(i=1;i<=n;i++){
    let str = "";
    for(j=1;j<=i;j++){
        str+=i+" ";

    }
    for(k=1;k<=(n-i)*2;k++){
        str+=" ";

    }

    for(l=1;l<=n;l++){
        str+=i+" ";
    }

    console.log(str);
}

