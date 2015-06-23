// get the code to shout its name
module.exports = {
  numerals: {
      convert: function (decimalNumber, X, V, I, r){
          if (decimalNumber > 40){
          
              decimalNumber = "Too high to calculate";
              X = "X";
              V = "V";
              I = "I";
              r = "r";
          }
          
          if (decimalNumber == 40){
              
              decimalNumber = "XL";
              X = null;
              V = null;
              I = null;
              r = null;
          }
              return decimalNumber + X + V + I + r;
      }
  }

};

/*
//random code warmups follow below.
module.exports = {//production code
    function add (a, b) {
    return a + b;
}    
};

//create a variable (a), set it to 'foo', then add 'bar'
var a = 'foo';
a += 'bar';
console.log (a);

//create an array and call parts of it

var students = {
    'VID':{
        name:'Rob', start:'Jan 01', program:'Digital Media'
    }
}

console.log(students);//returns outmost curly braces
console.log(students.VID);//returns values within VID
console.log(students.VID.program);//returns Digital Media
*/