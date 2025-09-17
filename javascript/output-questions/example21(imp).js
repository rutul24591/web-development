/**
 * !!!
 * Q21. Chained setTimeout & Promise
 * 
 * Explanation:
 * 
 * "x", "end" → synchronous.
 * Microtask (Promise) → "z".
 * Macrotasks: first timeout → "y", then second → "w".
 */

console.log("x");

setTimeout(() => console.log("y"), 0);

Promise.resolve().then(() => {
  console.log("z");
  setTimeout(() => console.log("w"), 0);
});

console.log("end");


/**
 * 
 * Output:
 * 
 * x
 * end
 * z
 * y
 * w
 */