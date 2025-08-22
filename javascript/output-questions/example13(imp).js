/**
 * !!!
 * Q13. Arguments & Rest
 * 
 * Explanation:
 * First parameter → a = 1.
 * Remaining values collected into rest.
 * arguments.length counts all passed arguments → 4.
 */

function foo(a, ...rest) {
  console.log(a, rest, arguments.length);
}
foo(1, 2, 3, 4);


/**
 * 
 * Output:
 * 
 * 1 [ 2, 3, 4 ] 4

 */