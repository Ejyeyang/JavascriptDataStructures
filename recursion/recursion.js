//Base Case - The condition when the recursion ends. 
//Different Input every time.  

//first example of a recursive function
function countDown(num){
    if(num <= 0){
        console.log("all done!");
        return; 
    }
    console.log(num); 
    num--;
    countDown(num); 
}