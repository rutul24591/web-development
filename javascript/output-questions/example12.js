/**
 * 
 * Q12. Hoisting in Functions
 * 
 * Explanation:
 * var a is hoisted → initialized as undefined.
 * First log prints undefined, then assignment → 10.
 */

function test() {
  console.log(a);
  var a = 10;
  console.log(a);
}
test();


/**
 * 
 * Output:
 * 
 * undefined
 * 10
 */