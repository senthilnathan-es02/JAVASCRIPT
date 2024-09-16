// 6. Create a URL from Parts
// You have three variables: protocol,
//  domain, and path. Use string concatenation to form a complete URL. 
// For example, if protocol = 
// "https", domain = "example.com", and path = "/about", the result should be:
//  "https://example.com/about".

let protocol="https://";
let domain="example.com";
let path="/about";
function result(){
 let answer=protocol+domain+path;
 console.log(answer);
}
result();
