// Write a JavaScript function that reverses an array without using the built-in reverse() method

let number=[1,2,3,4,5];
    let arrayrevese =[];
    for(i=number.length-1;i>=0;i--){
        arrayrevese.push(number[i]);
    }

 console.log(arrayrevese);