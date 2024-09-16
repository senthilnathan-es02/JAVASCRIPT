// 2.A robot moves forward as long as its battery level is above 20%.
//  Using a while loop, simulate the robot's movement, decreasing the battery
//  level by 5% after each step and displaying the remaining battery level.
//  Once the battery level is below 20%, Display Battery is low.


let batterylevel=100;
let lowBattery=20;
function battery(batterylevel){
    
    while(lowBattery<=batterylevel){
        console.log(`display battery is low${batterylevel}`);
        batterylevel=batterylevel-5;

    }
    console.log("battery level is low")
}battery(batterylevel);