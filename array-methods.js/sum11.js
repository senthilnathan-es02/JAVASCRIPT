// Create an array of 3 countries. Add one more country using push(), 
// then remove the last country using pop().
//  Print the updated array and the removed country.
// Combining shift() and unshift()

let country = ["france","america","austrila"];
country.push("usa");
console.log(country);

country.pop();
console.log(country);

country.unshift("usa2");
console.log(country);

country.shift();
console.log(country);
