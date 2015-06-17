/**
 * reorient to JS
 * 
 */
 
 var total = 5;
console.log(total);
 
var multByTwo = function(a){
    return a*2;
};

console.log(multByTwo(total));

function add (c, d){
    return c + d;
};

console.log(add (10, 20));
assert(add (1,1)===2, "one plus one is two");

var assert = require('assert');
assert.equal(multByTwo(total), 10, "The fuction multiByTwo fails to return the correct number.");