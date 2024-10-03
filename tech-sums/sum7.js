function boolen(n){
    let low = n.toLowerCase();
    if(low=="a"){
        return true;

    }
    else if(low=="d"||low=="e"||low=="f"){
        return false;
    }
    else{
        return 1;

    }
    


}console.log(boolen("D"));