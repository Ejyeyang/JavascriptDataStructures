//for strings array it will sort in alphabetical order
arr.sort();

//for ints it will sort my unicode so not by values
arr.sort();

//this sorts ints from small to large works for strings too
function numberCompare(num1, num2){
    return num1 - num2; 
}
arr.sort(numberCompare); 

//this sorts ints from large to small works for strings too. 
function numCompare(num1, num2){
    return num2 - num1;
}
arr.sort(numCompare); 