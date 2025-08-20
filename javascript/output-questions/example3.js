/**
 * Q3. Promise vs setTimeout
 *
 * Explanation:
 * JS event loop:
 * Main thread → "A", "D"
 * Microtask (Promise) → "C"
 * Macrotask (setTimeout) → "B"
 */

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

/**
 * Output:
 * 
 * A
 * D
 * C
 * B

 */
