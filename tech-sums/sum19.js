let numbers = [10, 20, 10, 40, 50, 60, 70];
let targetSum = 50;
let pairs=[];
// Expected output: [ [10, 40], [20, 30] ]
for(i=0;i<numbers.length;i++){
    for(j=0;j<numbers.length;j++){
        let tot = numbers[i]+numbers[j];
        if(tot==targetSum){
            pairs.push([numbers[i],numbers[j]]);
        }
    }
}console.log(pairs)