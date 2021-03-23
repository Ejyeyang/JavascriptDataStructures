/**
 * should return max sum of "nums" in the
 * "arr". 
 * 
 * example
 * arr[1, 2, 3, 4, 5]
 * maxSubArraySum(arr, 2) returns 9; 
 */
function maxSub(arr, num){
    if(arr < num){
        return null;
    }

    let max = 0; 
    let temp = 0; 

    for(let i = 0; i < num; i++){
        max += arr[i];
    }

    temp = max; 
    for(let i = num; i < arr.length; i++){
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }

    return max; 
}


function maxSubArraySum(arr, num){
    if(arr.length < num){
        return null;
    }

    let temp = 0; 
    let max = 0; 

    //gets initial max value
    for(let i = 0; i < num; i++){
        max += arr[i];
    }
    
    temp = max; 

    //sliding window by subtracting first 
    //array value and add next array value
    for(let i = num; i < arr.length; i++){
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }
    return max; 
}