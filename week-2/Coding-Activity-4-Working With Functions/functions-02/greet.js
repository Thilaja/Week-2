/* 
Write the greet() function
- Pass in the name parameter and return a string with the name argument.
- for ex. functionName(parameter){...}
*/
function greet(name) {
    //your code goes down here
    let greeting = 'Greetings'+" "+ name//declare a variable assign the name parameters
    return greeting
    
  }
  
  //open the browser console to check results
  console.log('results: ', greet('Dani'));//pass the paramters to function
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = greet;
  }
  