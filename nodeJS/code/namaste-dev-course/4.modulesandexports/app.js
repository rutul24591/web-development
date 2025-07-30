/**
 * This is commonJS module.
 * module.exports and require
 *
 */
var a = 30;
var b = 23;
var name = "Rutul Amin";

require("./xyz"); // xyz.js   both works
// const { x, calculateSum } = require("./sum");
// const obj = require("./sum");

const { calculateMultiply, calculateSum, x } = require("./calculate");

console.log("x:", x);
calculateSum(a, b);
calculateMultiply(a, b);
// obj.calculateSum(a, b); // This is also correct but older way.
