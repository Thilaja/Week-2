/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here

///////////////
function greetings() {
  //also your code here
  ///////////////
  var myFriend ="A Rodericks";//create a variable myFriend assign value 
  return "greetings " + myFriend +".";//return myFriend value and print greetings A Rodericks.
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}
