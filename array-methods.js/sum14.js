// Create an array of 4 fruits. Use indexOf() to check if
//  "Apple" exists in the array. If it does, print "Found", otherwise print "Not Found".


let array = ["apple","orange","banana","strawberry"]
console.log(array.indexOf("apple"));

if(0<=array.indexOf("apple")){
    console.log("found");
}
else{
    console.log("not found");
}

