arrOne = [-3, -2 , -1, 0, 1, 2, 3]; // returns [-3, 3]
arrTwo = [-2, 0, 1, 3]; //should return undefined
arrThree = [1, 2, 3]; //should return undefined

//write a function called sumZero which accepts a sorted array 
//of integers, the function should find the first pair
//where the sum is 0. Return an array that includes both the values
//that sum to zero or return undefined if the pair does not exist
//in the array. 

function sumZero(arr){
    let left = 0; 
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if( sum > 0){
            right--; 
        } else {
            left--; 
        }
    }
}

function sumZero(arr){
    let left = 0; 
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if( sum > 0){
            right--; 
        } else {
            left--; 
        }
    }
}

function sumZero(arr){
    let left = 0; 
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if( sum > 0){
            right--; 
        } else {
            left--; 
        }
    }
}



function sumZeroAgainAgain(arr){
    let left = 0; 
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}


