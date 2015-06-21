var assert = require('assert'), 
    calculator = require("./2015JavaScriptCode.js");
    


//find a varialbe called romanCalc
assert(calculator.numerals);
assert(calculator.numerals.convert(41) === 'too high to calculate');
assert(calculator.numerals.convert(40) === "XL");
assert(calculator.numerals.convert(39) === "XXXIX");

/*create a test function
function test (a, b){
    assert(calculator.numerals.convert(a) === b);
}

console.log(test(1,1));
*/