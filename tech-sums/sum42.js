let number =[1,2,3,4,5,6,7];
let rotate =3;
for (i=0;i<rotate;i++){
   let firstelement= number.shift();
    number.push(firstelement);
}console.log(number);