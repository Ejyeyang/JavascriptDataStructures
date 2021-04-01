//for strings array it will sort in alphabetical order
arr.sort();

//for ints it will sort my unicode so not by values
arr.sort();

//this sorts ints from small to large works for strings too
function asc(num1, num2){
    return num1 - num2; 
}
arr.sort(asc); 

//this sorts ints from large to small works for strings too. 
function desc(num1, num2){
    return num2 - num1;
}
arr.sort(desc); 