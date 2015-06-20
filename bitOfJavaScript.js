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

var assert = require('assert');
assert.equal(multByTwo(total), 6, "The fuction multiByTwo fails to return the correct number.");
console.log(multByTwo(total) === 6 ? "true" : "false");
//try a simple tenary operator
console.log(add (1,1) === 2 ? "True" : "False");