// 1.Given the array train_departures = [10, 15, 7, 20, 5],
//  where each element represents the departure time of a train in 24-hour
//  format, find the earliest train to depart.

let train_departures = [10, 15, 7, 20, 5];
function departure(train_departures){
 let answer=   Math.min(...train_departures);
 console.log(answer);

}departure(train_departures);