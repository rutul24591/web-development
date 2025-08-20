/**
 * !!!
 * Q8. Function Length
 *
 * Explanation:
 *
 * .length gives number of parameters before the first with a default value.
 * Here, b has default, so only a counts.
 *
 */

function sum(a, b = 5, c) {}
console.log(sum.length);

/**
 *
 * Output:
 *
 * 1
 */
