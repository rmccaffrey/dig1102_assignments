console.log('abc' + 123);

var a = 1;

var b = a || 2;

console.log(a + b);

console.log('Hello, ' + (name || 'Guest') + '!');
//the line above is supposed to greet either a known user or a Guest


for ( var i = 0, j = 2; ( i < 10 && j < 256 ); i++, j*= 2 )
{
    console.log ( i + " is still too low");
    console.log ( j + " is still too low");
}




/*semicolons are optional, which may mess you up. This:
var f = function(){
}(function($)){
    

})

//is not the same as
var f = function(){
}

(function($)){
    

})*/