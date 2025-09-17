/**
 * !!!
 * Q26. Destructuring Default Values
 * 
 * 
 * Explanation:
 * 
 * Default applies only when value is undefined.
 * a = 1 because first value is undefined.
 * b gets null directly (no default).
 */

console.log("Hello")
const [a = 1, b = 2] = [undefined, null];
console.log(a, b);


/**
 * 
 * Output:
 * 
 * 1 null
 */