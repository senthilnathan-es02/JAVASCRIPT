function hallowSquare (n) {
    // Enter your code here
    let outputStr = "";
    for(let i = 1; i <= n; i++) {
        outputStr += "1 ";
    }
    console.log(outputStr);
    
    for (let i = 2; i <= n-1 ; i++) {
        let outputStr = "";
        for(let j = 1; j <= n; j++) {
            if(j == 1 || j == n) {
                outputStr += "* ";
            }
            else {
                outputStr += "  ";
            }
        }
        console.log(outputStr);
    }
    
    outputStr = "";
    for (let i = 1; i <= n ;i++) {
        outputStr += n + " ";
    }
    console.log(outputStr);
    
}hallowSquare(5);
