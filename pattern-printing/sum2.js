// Print the below pattern of ‘*’ if n = 3

let n =3;

for(i=1;i<=n;i++){
    let row ="";


    for(j=1;j<=n-i;j++){
        row=row+" ";
    }

    for(k=1;k<=i;k++){
        row=row+" *";
        
    }
    console.log(row);
    
}


