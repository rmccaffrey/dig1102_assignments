* This breaths well
* The variable names seem meaningful
* He / she is NOT putting the open curly brace on the same line as the object



```javascript
var oConsole = document.getElementById("console");
var oList =  oConsole.getElementsByTagName("ul")[0];
function fpLog(sMessage)
{
    var oElement = document.createElement("li");
	oElement.appendChild(document.createTextNode("- " + sMessage));
	oList.appendChild(oElement);
};

if(!window.console)
{
	window.console = {};
	window.console.log = function(sMessage)
	{
		fpLog(sMessage);
	};
}else
{
	if(window.console.log)
	{
		var fpConsoleLog = window.console.log;
		window.console.log = function(sMessage)
		{
			fpLog(sMessage);
			fpConsoleLog.call(window.console, sMessage);
		};
	}
}
```

* Still writing neat JS
* Using the correct placement of the open curly brace

```javascript

var CaffeineBeverage = function(){

};
CaffeineBeverage.prototype.prepareRecipe = function(){
    this.boilWater();
	this.brew();
	this.pourOnCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}
};
CaffeineBeverage.prototype.boilWater = function(){
	console.log("Put water on fire until the water starts boiling!");
};
CaffeineBeverage.prototype.pourOnCup = function(){
	console.log("Put beverage on Cup!");
};
CaffeineBeverage.prototype.brew = function(){
	throw new Error("This method mus be overwritten!");
};
CaffeineBeverage.prototype.addCondiments = function(){
	throw new Error("This method mus be overwritten!");
};
CaffeineBeverage.prototype.customerWantsCondiments = function(){
	return true;
};