// TODO: declare a const names lacroix1 and initialized it to the value 'grapefruit'
const lacroix1="grapefruit";//using const create a variable lacroix1 assign value grapefruit

//create a function and function name testBestFlavor()
function testBestFlavor() {
  // TODO: declare a const names lacroix2 and initialized it to the value 'orange'
  const lacroix2="orange";//using const create a variable lacroix2 assign value orange

  
  return '"Ana says, lacroix ' + lacroix2+ " "+ 'is a better flavor than lacroix ' + lacroix1 +'.'+'"';//print the values
}

//check results in the console browser
console.log('result: ', testBestFlavor());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = testBestFlavor;
}
