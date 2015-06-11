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

var assert = require('assert');
assert.equal(multByTwo(total), 10, "The fuction multiByTwo fails to return the correct number.");