// Write a program to split the string "dog,cat,bird" into an array and print the resulting array.
// Combining push() and pop()

let string ="dog,cat,bird";
let answer=string.split(",");
console.log(answer);

answer.push("animal");
console.log(answer);

answer.pop();
console.log(answer);