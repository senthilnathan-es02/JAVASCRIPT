// 3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”

function arrayreversed(array){
    let empty = [];
    let arr = array.split(" ");
    for(i=arr.length-1;i>=0;i--){
        empty.push(arr[i]);
    }
    return empty.join(" ");

}console.log(arrayreversed("naan nallvan da mapla"));