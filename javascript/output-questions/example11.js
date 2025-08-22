/**
 * 
 * Q11. Nested setTimeouts
 * 
 * Explanation:
 * "start" and "end" → synchronous.
 * First timeout runs → "timeout1".
 * Second timeout is queued → "timeout2" runs last.
 */
console.log("start");

setTimeout(() => {
  console.log("timeout1");
  setTimeout(() => console.log("timeout2"), 0);
}, 0);

console.log("end");

/**
 * Output: 
 * 
 * start
 * end
 * timeout1
 * timeout2
 */