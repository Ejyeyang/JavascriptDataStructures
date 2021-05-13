//binary search only works on sorted arrays. 
//strings must be alphabetical
//integers must be lowest to highest or vice versa

['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut',
'Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam',
'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands',
'Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands',
'Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota',
'Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

//divide and conquer. 
function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length - 1; 
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2); 
        if(target < arr[middle]){
            right = middle - 1; 
        } else if(target > arr[middle]){
            left = middle + 1; 
        } else {
            return middle; 
        }
    }
    return -1; 
}

function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length - 1; 
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2); 
        if(target < arr[middle]){
            right = middle - 1; 
        } else if(target > arr[middle]){
            left = middle + 1; 
        } else {
            return middle; 
        }
    }
    return -1; 
}
function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length - 1; 
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2); 
        if(target < arr[middle]){
            right = middle - 1; 
        } else if(target > arr[middle]){
            left = middle + 1; 
        } else {
            return middle; 
        }
    }
    return -1; 
}

function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length - 1; 
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2); 
        if(target < arr[middle]){
            right = middle - 1; 
        } else if(target > arr[middle]){
            left = middle + 1; 
        } else {
            return middle; 
        }
    }
    return -1; 
}