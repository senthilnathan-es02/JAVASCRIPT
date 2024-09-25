// Given the array water_levels = [30, 50, 20, 40, 60], 
// where each element represents the current water level in a tank, 
// find the tank with the lowest water level.

let levels = [30, 50, 20, 40, 60];
let low=Math.min(...levels);
console.log(low);
