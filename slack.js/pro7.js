// 7. Form a Product Description
// Write a program that takes two variables, product and price, 
// and creates a sentence describing the product.
//  For example, if product = "laptop" and price = "$800",
//  the result should be: "This laptop costs $800.".

let product="laptop";
let price="$800";
function result(){
    let answer=" The "+product+" costs "+price;
    console.log(answer);
}
result();
