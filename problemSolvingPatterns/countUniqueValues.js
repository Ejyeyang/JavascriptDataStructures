/**
 * Implement a function called countUniqueValues
 * which accepts a sorted array, and counts the
 * unique values in the array. There can be 
 * negative numbers in the array, but it will 
 * always be sorted. 
 */

function countUniqueValues(arr){
    if(arr.length === 0){
        return 0; 
    }

    let left = 0; 
    for(let i = 1; i < arr.length; i++){
        if(arr[left] !== arr[i]){
            left++;
            arr[left] = arr[i];
        }
    }
    return left + 1; 
}

function countUniqueValues(arr){
    if(arr.length === 0){
        return 0; 
    }

    let left = 0; 
    for(let i = 1; i < arr.length; i++){
        if(arr[left] !== arr[i]){
            left++;
            arr[left] = arr[i];
        }
    }
    return left + 1; 
}


function countUniqueValues(arr){
    if(arr.length === 0){
        return 0; 
    }

    let left = 0; 
    for(let i = 1; i < arr.length; i++){
        if(arr[left] !== arr[i]){
            left++;
            arr[left] = arr[i];
        }
    }
    return left + 1; 
}