/**
 * Q22. Function Declaration vs Expression
 * 
 * Explanation:
 * f1 is hoisted fully → function.
 * f2 is hoisted as undefined (assignment happens later).
 */

console.log(typeof f1, typeof f2);

function f1() {}
var f2 = function() {};

/**
 * Output:
 * 
 * function undefined
 */