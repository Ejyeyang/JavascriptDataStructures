
function swap(arr, ind1, ind2){
    var temp = arr[ind1];
    arr[ind1] = arr[ind2]; 
    arr[ind2] = temp; 
}

//same as above
const swap2 = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; 
}

const swap2 = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; 
}

function swap(arr, ind1, ind2){
    var temp = arr[ind1];
    arr[ind1] = arr[ind2]; 
    arr[ind2] = temp; 
}