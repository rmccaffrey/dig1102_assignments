var assert = require("assert"),
    problem = require("./2013-04-27-code");
/**
 * What did we do well?
 *  - Discussion, analysis, test plans, collaboration
 *  - Baby steps!
 * 
 * What could we improve?
 *  - Refactor.
 *  - How and when to use dictionaries, arrays, etc.
 *  - Respect the pair: no talk on RED.
 *  - Respect the team: no talking over each other, listen to everyone.
 * 
 * Did we meet our goals?
 *  - Can convert 1-10, 50, 100, 500, 1000 :)
 *  - Cannot convert anything else... :(
 */
    
/** define what each I, V, X, L, C, D, M is worth
 *  I = 1
 *  V = 5
 *  X = 10
 *  L = 50
 *  C = 100
 *  D = 500
 *  M = 1,000
 */
 
 assert(problem.numerals);

// Is there a dictionary called "numerals"
// Does 1 = I? see chart below

/** input |  output 
 *  1     |  I
 *  5     |  V
 * 10     |  X
 * 50     |  L
 * 100    |  C
 * 500    |  D
 * 1,000  |  M
 */
 assert(problem.numerals.roman);
 
 //define a roman numeral
 assert(problem.numerals.roman(1) === 'I')// ? "we get I" : "we don't get I";
 assert(problem.numerals.roman(5) === 'V');
 assert(problem.numerals.roman(10) === 'X');
 assert(problem.numerals.roman(50) === 'L');
 assert(problem.numerals.roman(100) === 'C');
 assert(problem.numerals.roman(500) === 'D');
 assert(problem.numerals.roman(1000) === 'M');
 assert(problem.numerals.roman(4) === "IV");
 
 
// For these we need to create functions
/** input | output
 *  2     |  II
 *  3     |  III
 *  4     |  IV
 *  6     |  VI
 *  7     |  VII
 *  8     |  VIII
 *  9     |  IX
 */
 
assert( problem.numerals.roman(2) === 'II');
assert( problem.numerals.roman(3) === 'III');
assert( problem.numerals.roman(4) === 'IV');
assert( problem.numerals.roman(6) === 'VI');
assert( problem.numerals.roman(7) === 'VII');
assert( problem.numerals.roman(8) === 'VIII');
assert( problem.numerals.roman(9) === 'IX');
//write a function to evaluate input for the tenths placeholder

/** input 
 * 11 - 19   return X
 * 20 - 29   return XX
 * 30 - 39   return XXX
 * 40 - 49   return XL
 * 50 - 59  return L
 * 60 - 69  return LX
 * 70 - 79  return LXX
 * 80 - 89 return LXXX
 * 90 - 99  XC
 * 
 * 
 */
assert( problem.numerals.tenths);
assert(problem.numerals.tenths);

//write a function to evaluate input for the hundreths placeholder
//write a function to evaluate input for the thousandths placeholder








// These go in code

// We need a function that returns a value that is a roman numeral "roman"
// We need a key with a decimal number a direct represention as stated above
// Take a decimal and convert it to a roman numeral
// For the first three increments you add an "I" 
// For the next increment you subtract an "I" from that increment
// Once you get above ten
// How do we create "3"?
// How do we create "4"?
 
