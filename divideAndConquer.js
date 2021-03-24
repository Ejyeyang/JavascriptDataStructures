/**
 * given a sorted array of integers, write a function
 * called search, that accepts a value and returns the
 * index where the value passed to the function is 
 * located. If the value is not found return -1; 
 */
 function averagePair(array, targetAverage){
    if(array.length === 0){
        return false; 
    }
    let left = 0; 
    let average = 0; 
    let sum = 0; 
    let pair = 2; 
    
    for(let i = left; i < pair; i++){
        sum += array[i];
    }
    average = sum / 2; 
    if(average === targetAverage){
        return true; 
    }
    for(let i = pair; i < array.length; i++){
        let sum = average - array[pair - i] + array[i];
        let average = sum / 2; 
        if(average === targetAverage){
            return true; 
        }
    }
    return false; 
}

function search(array, val){
    let min = 0; 
    let max = array.length - 1; 

    while(min <= max){
        let middle = Math.floor((min + max) / 2); 
        let currentElement = array[middle]; 
        if(currentElement > val){
            min = middle + 1; 
        } else if(currentElement < val){
            max = middle - 1; 
        } else{
            return currentElement; 
        }
    }
    return - 1; 

}