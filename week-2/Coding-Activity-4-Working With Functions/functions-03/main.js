/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/

//Write your code here
////////////////////////////////////////

  ////////////////////////////////////////
  function isString(x1,x2,x3){
    if((typeof(x1)==='string') && (typeof(x2) === 'string') && (typeof(x3) ==='string')){
        return 'string'
    }
    else{
        return 'not string'
    }
    }
    console.log(isString('a','b','c'))
    
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = isString;
  }
  