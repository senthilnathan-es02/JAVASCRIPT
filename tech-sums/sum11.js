function findSecondLargest(number){
    let largest =0;
    let secondlargest=0;
    let thirdlargset=0;
    for(i=0;i<number.length;i++){
        if(number[i]>largest){
            largest=number[i];
        }

    }
    for(i=0;i<number.length;i++){
        if(secondlargest<number[i] && number[i]<largest){
            secondlargest=number[i];
        }
        
    }
    for(i=0;i<number.length;i++){
        if(thirdlargset<number[i] && largest>number[i] && secondlargest>number[i]){
            thirdlargset=number[i];

        }
    }
    
    console.log(thirdlargset);

}findSecondLargest([23,45,67,89]);
