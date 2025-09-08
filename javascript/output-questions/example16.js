/**
 * Q16. Chained Async
 * 
 * Explanation:
 * Async functions return a Promise.
 * "done" logs first. (Synchronous)
 * .then callback executes in microtask → logs 10.
 */

async function f() {
  return 10;
}

f().then(x => console.log(x));

console.log("done");

/**
 * 
 * Output:
 * 
 * done
 * 10
 */