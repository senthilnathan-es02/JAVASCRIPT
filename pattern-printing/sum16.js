let n =5;
for(i=1;i<=n;i++){
    let row="";
    for(j=1;j<n;j++){
        if(j==1||i==n||j==i){
            row+="* ";

        }
        else{
            row+=" ";
        }
    }
    console.log(row);
}