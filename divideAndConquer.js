/**
 * given a sorted array of integers, write a function
 * called search, that accepts a value and returns the
 * index where the value passed to the function is 
 * located. If the value is not found return -1; 
 */

function search(arr, val){
    let min = 0; 
    let max = arr.length - 1; 

    while(left <= right){
        //The Math. floor() function returns the largest integer
        // less than or equal to a given number.
        let middle = Math.floor((min + max) / 2); 
        if(arr[middle] > val){
            min = arr[middle] + 1;
        } else if(arr[middle] < val){
            max = arr[middle] - 1;
        } else {
            return middle; 
        }
    }
    return -1; 
}