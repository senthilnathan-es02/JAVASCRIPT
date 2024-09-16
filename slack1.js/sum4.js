// 4.An airplane altitude currently is 1000ft and its altitude reduces each 
// second by 10ft. Write a program which will print “Flight arrived”
//  when the airplane altitude reaches 0ft.

let altitude=1000;
function aeroplane(){
    while(altitude>=0){
    if(altitude==0){

    console.log("flight arrived");
    }
altitude=altitude-10;
    }
}aeroplane()