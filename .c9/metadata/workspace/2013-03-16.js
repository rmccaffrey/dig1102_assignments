{"changed":true,"filter":false,"title":"2013-03-16.js","tooltip":"/2013-03-16.js","value":"var assert = require(\"assert\");\n\n//assert(1 + 1 == 1, '1 + 1 does not equal 1');\n//assert.equal(1, 1 + 1, '1 + 1 does not equal 1');\n\n/**\n * four functions with two parameters:\n * - addition\n * - subtraction\n * - multiplication\n * - division\n * \n * Must accept positive and negative Numbers (int or \n * float) AND zero. Must not make an error!\n */\n \n/**\n * testing addition():\n * one | two | out\n * ====+=====+====\n *  +1 | +1  | +2\n *  +1 | +0  | +1\n *  +1 | -1  | +0\n *  -1 | +1  | +0\n *  -1 | +0  | -1\n *  -1 | -1  | -2\n *  +0 | +1  | +1\n *  +0 | +0  | +0\n *  +0 | -1  | -1\n */\n\n//This is an addition function\nvar addition = function(a, b) {\n     return (a+b);\n}\n\n//This is a subtraction function\nvar sub = function(a, b) {\n     return (a-b);\n}\n\nvar multi = function(a, b) {\n     return (a*b);\n}\n//These are addition tests\nassert.equal(2,addition(1,1));\nassert.equal(1,addition(1,0));\nassert.equal(0,addition(1,-1));\nassert.equal(0,addition(-1,1));\nassert.equal(-1,addition(-1,0));\nassert.equal(-2,addition(-1,-1));\n\n//This is a subtraction test\nassert.equal(0,sub(1,1));\nassert.equal(1,sub(1,0));\nassert.equal(2,sub(1,-1));\nassert.equal(-1,sub(0,1));\nassert.equal(0,sub(0,0));\n\nassert.equal(0,multi(0,1));\n\n\n\n\n\n","undoManager":{"mark":44,"position":52,"stack":[[{"group":"doc","deltas":[{"start":{"row":40,"column":0},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":0},"end":{"row":59,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":1},"end":{"row":59,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":2},"end":{"row":59,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":3},"end":{"row":59,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":4},"end":{"row":59,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":5},"end":{"row":59,"column":6},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":6},"end":{"row":59,"column":7},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":7},"end":{"row":59,"column":8},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":8},"end":{"row":59,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":9},"end":{"row":59,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":10},"end":{"row":59,"column":11},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":11},"end":{"row":59,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":13},"end":{"row":59,"column":14},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":14},"end":{"row":59,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":15},"end":{"row":59,"column":16},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":17},"end":{"row":59,"column":18},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":18},"end":{"row":59,"column":19},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":19},"end":{"row":59,"column":20},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":20},"end":{"row":59,"column":22},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":21},"end":{"row":59,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":22},"end":{"row":59,"column":23},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":23},"end":{"row":59,"column":24},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":24},"end":{"row":59,"column":25},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":26},"end":{"row":59,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":27},"end":{"row":59,"column":28},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":28},"end":{"row":61,"column":1},"action":"insert","lines":["","     ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":5},"end":{"row":60,"column":6},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":7},"end":{"row":60,"column":8},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":8},"end":{"row":60,"column":9},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":9},"end":{"row":60,"column":10},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":10},"end":{"row":60,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":11},"end":{"row":60,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":12},"end":{"row":60,"column":14},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":13},"end":{"row":60,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":14},"end":{"row":60,"column":15},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":15},"end":{"row":60,"column":16},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":17},"end":{"row":60,"column":18},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":0},"end":{"row":61,"column":1},"action":"remove","lines":["var multi = function(a, b) {","     return (a*b);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["var multi = function(a, b) {","     return (a*b);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":26},"end":{"row":44,"column":27},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":26},"end":{"row":44,"column":27},"action":"remove","lines":["g"]}]}]]},"ace":{"folds":[],"scrolltop":447,"scrollleft":0,"selection":{"start":{"row":44,"column":26},"end":{"row":44,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"doc-start","mode":"ace/mode/javascript"}},"timestamp":1417473507851}