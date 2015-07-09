// get the code to shout its name
module.exports = {
  numerals: {
      convert: function (decimalNumber){
          if (decimalNumber > 40){
          
              decimalNumber = "Too high to calculate";
              return decimalNumber;
           
          }
          
          if (decimalNumber == 40){
              
              decimalNumber = "XL";
              return decimalNumber;
           
          }
          
          if (decimalNumber >= 10){
             var romanTens = "";
             var romanFives = "";
             
             while (decimalNumber >= 10){
              //romanTens = (romanTens + 1);
              decimalNumber = (decimalNumber - 10);
              var romanTens = (romanTens + "X");
              
              }
              
              while (decimalNumber >= 5){
                  decimalNumber = (decimalNumber - 5);
                  var romanFives = (romanFives + "V");
              }
              return romanTens + romanFives;
          }
            
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