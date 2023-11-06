// Code your solution in this file
function distanceFromHqInBlocks(number){
    if (number < 42){
    return 42 - number    
}
return number - 42
} 

function distanceFromHqInFeet(number){

    return distanceFromHqInBlocks(number) *264
}

function distanceTravelledInFeet(number1, number2){
    if (number1 < number2){
        return (number2 - number1) * 264  
    }
    return (number1 - number2) * 264
}



function calculatesFarePrice(start, destination){
  let freeSample= 0;
   let feet= distanceTravelledInFeet(start, destination)
    if (feet <= 399){
     return (freeSample)
    }
    else if (feet >= 401 && feet <= 2000){
       return (2.56);
    }

    else if (feet >= 2001 && feet <= 2499){
       return (25);
    }
    else if ( feet >= 2500){
        return ('cannot travel that far');
    }
}
