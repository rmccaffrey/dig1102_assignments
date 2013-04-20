console.log( 1 - 0.545);

console.log( 10 - 5.45);

console.log( 100 - 54.5);

console.log( 1000 - 545);

var robsFirstArray = [ 'Robert', 'M', 'McCaffrey', 'Valencia College', 2003 ];

console.log (robsFirstArray.length);
console.log (robsFirstArray[2], 'at', robsFirstArray[3]);

console.log (robsFirstArray.pop()); //pops the last item off and returns it
console.log (robsFirstArray.length); //shows me that the array is now shorter

console.log (robsFirstArray.shift()); //pops the first item off the head
console.log (robsFirstArray.length); //shows me that the array is now shorter
console.log (robsFirstArray[2], 'at', robsFirstArray[3]); //gives a new return with the shorter list

/* The line below creates a TypeError
console.log (robsFirstArray.reduce()); //reduces remaining values to a single value
*/
