//Declare a variable calld "counter" and set it to 0
let counter = 0;
//Write a function that increments the variable "counter" by 1 every time it is called
function count(){
    counter++//increment counter by 1
    console.log(counter)//print the counter
}

//Schedule the execution of the function every 3 seconds
setInterval(count,3000)

