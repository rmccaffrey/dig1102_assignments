var assert = require('assert'), 
    calculator = require("./2015JavaScriptCode.js");
    



//test for returning all variables
assert(calculator.numerals.convert(41) === "Too high to calculate")
console.log(calculator.numerals.convert(41));

// test for 40
console.log(calculator.numerals.convert(40));
assert(calculator.numerals.convert(40) === "XL");

//test for 30
console.log(calculator.numerals.convert(30));
assert(calculator.numerals.convert(30) === "XXX");

//old passed tests
//find the fucntion in the production code and get a return
//assert(calculator.numerals.convert("hello") === "hello");
//console.log(calculator.numerals.convert("hello"));

/*create a test function
function test (a, b){
    assert(calculator.numerals.convert(a) === b);
}

console.log(test(1,1));
*/