//for strings array it will sort in alphabetical order
arr.sort();

//for ints it will sort my unicode so not by values
arr.sort();

//this sorts ints from small to large
function numberCompare(num1, num2){
    return num1 - num2; 
}
arr.sort(numberCompare); 