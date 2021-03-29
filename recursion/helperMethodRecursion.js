//Helper method recursion 
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
