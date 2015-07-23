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

//test for 35
console.log(calculator.numerals.convert(35));
assert(calculator.numerals.convert(35) === "XXXV");

//test for 38
console.log(calculator.numerals.convert(38));
assert(calculator.numerals.convert(38) === "XXXVIII");

//refactorig the test
function refactorTests (decimalNumber, romanNumber){
    console.log(calculator.numerals.convert(decimalNumber));
    assert(calculator.numerals.convert(decimalNumber) === romanNumber);
}

refactorTests(25, "XXV");
refactorTests(15, "XV");
refactorTests(26, "XXVI");
refactorTests(10, "X");
refactorTests(9, "IX");
refactorTests(19, "XIX");
refactorTests(29, "XXIX");
refactorTests(39, "XXXIX");
refactorTests(8, "VIII");


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