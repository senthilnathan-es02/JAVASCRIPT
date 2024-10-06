// 3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....
// up until the nth term
// if n = 4, print the first 4 odd numbers 1 3 5 7.

function oddnumber(number){

    for (i=1;i<=12;i++){
        if(i%2!=0){
            console.log(i);
        }
    }

}
oddnumber(1,3,5,7,9,11);