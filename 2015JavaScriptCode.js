// build a calculator to convert Arabic numbers to Roman numerals
module.exports = {
  numerals: {
      convert: function (decimalNumber, remainder){
          if (decimalNumber > 40){
          
              decimalNumber = "Too high to calculate";
              return decimalNumber;
           
          }
          
          if (decimalNumber == 40){
              
              decimalNumber = "XL";
              return decimalNumber;
           
          }
           
          
          if (decimalNumber >0){
             remainder = "";
             var romanTens = "";
             var romanFives = "";
             var romanOnes = "";
             
             while (decimalNumber >= 10){
              decimalNumber = (decimalNumber - 10);
              romanTens = (romanTens + "X");
              
              }
              
              if (decimalNumber == 9){
                  remainder = "IX";
                  return romanTens + remainder;
              }
              
              while (decimalNumber >= 5){
                  decimalNumber = (decimalNumber - 5);
                  romanFives = (romanFives + "V");
              }
               
               if (decimalNumber == 4){
                  remainder = "IV";
                  return romanTens + remainder;
              }
              
              while (decimalNumber > 0){
                  decimalNumber = (decimalNumber - 1);
                  romanOnes = (romanOnes + "I");
              }
              return romanTens + romanFives + romanOnes + remainder;
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