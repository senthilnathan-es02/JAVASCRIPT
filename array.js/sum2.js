// 2.Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0],
//  where 1 means a seat is booked and 0 means a seat is available,
//  count the total number of available seats.

let value = [1, 0, 1, 1, 0, 0, 1, 0];
function available(value){
    let s=0;
    for(let i=0;i<=value.length;i++){
        if(value[i]==0){
            s+=1;
        }
    }
   console.log(s);
    }
available(value);

