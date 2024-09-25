// Given the array landing_times = [12, 15, 12, 18, 20], 
// where each element represents the time a helicopter is scheduled to land,
//  check if any two helicopters are scheduled to land at the same time



// function reverse(value){
//     for(i=0;i<value.length;i++){
//         let answer=value.pop();

//     }

// console.log(value);
// }
// reverse([1,2,3,4,5])

function stringReverse(){
    let arrays =["HTml","css","javascript"];
    let str=" ";
    let length=arrays.length;
    for (i=length-1;i>=0;i--){
        str+=arrays[i]+" ";
    }
    console.log(str.split([" "]));
}
stringReverse();