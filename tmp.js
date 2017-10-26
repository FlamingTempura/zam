var acorn = require('acorn');
var jsep = require('jsep');
var esprima = require('esprima');
var chev = require("./src/ecma5_api").parse;

var b = acorn.parseExpressionAt('!qq');

console.log(JSON.stringify(b));

var c = jsep('!qq');
console.log(JSON.stringify(c));

var d = esprima.parse('!qq');
console.log(JSON.stringify(d.body[0].expression));

var e = chev('1 + 1');
console.log(e);