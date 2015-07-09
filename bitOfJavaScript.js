/**
 * reorient to JS
 * 
 */
var assert = require("assert");
var total = 3;
console.log(total);
 
var multByTwo = function(total){
    return total*2;
};

console.log(multByTwo(total));

function add (c, d){
    return c + d;
};

console.log(add (10, 20));
assert(add (1,1)===2, "The fuction add fails to return the correct number.");


assert.equal(multByTwo(total), 6, "The fuction multiByTwo fails to return the correct number.");
console.log(multByTwo(total) === 6 ? "true multi" : "false multi");
//try a simple tenary operator
console.log(add (1,1) === 2 ? "True" : "False");

function testDriven (decimalNumber){
    return decimalNumber = "message from the decimalNumber";
    
}

console.log(testDriven(1)); //should return the line from testDriven

console.log(null + "hello");
console.log(null + 0);

console.log("X" + "X" + "X");