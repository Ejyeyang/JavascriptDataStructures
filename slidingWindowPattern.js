/**
 * should return max sum of "nums" in the
 * "arr". 
 * 
 * example
 * arr[1, 2, 3, 4, 5]
 * maxSubArraySum(arr, 2) returns 9; 
 */

function maxSubArraySum(arr, num){
    let maxSum = 0; 
    let tempSum = 0;

    if(arr.length < num){
        return null;
    }

    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum; 

    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum; 
}