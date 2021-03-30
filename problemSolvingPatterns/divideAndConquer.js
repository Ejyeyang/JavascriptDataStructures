/**
 * given a sorted array of integers, write a function
 * called search, that accepts a value and returns the
 * index where the value passed to the function is 
 * located. If the value is not found return -1; 
 */
function searchAndDestroy(array, target){
    let left = 0; 
    let right = array.length -1; 

    while(left <= right){
        let middle = Math.floor((left + right) / 2); 
        if(arr[middle] > target){
            right = middle - 1; 
        } else if(ar[middle] < target){
            left = middle + 1;
        } else {
            return middle; 
        }
    }
    return -1; 
}
