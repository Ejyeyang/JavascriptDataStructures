//Helper method recursion
/** 
 * Helper method recursion is a pattern where
 * we have an outer method which calls an 
 * inner function which is recursive. 
 * */ 
function collectOddValues(arr){
    let result = []; 
    function helper(helperInput){
        if(helperInput.length === 0){
            return; 
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        /**
         slice returns a copy of a portion of
        an array starting from the position
        passed
         */

        helper(helperInput.slice(1)); 
    }
    helper(arr);
    return result; 
}

//pure recursion method of above example
function collectOddValuesRecursive(arr){
    let newArr = [];
    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    //.concat merges two or more arrays. 
    newArr = newArr.concat(collectOddValuesRecursive(arr.slice(1)));
    return newArr; 
}
function collectOddValuesRecursive(arr){
    let newArr = [];
    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    //.concat merges two or more arrays. 
    newArr = newArr.concat(collectOddValuesRecursive(arr.slice(1)));
    return newArr; 
}
