/**
 * 
 * Q30. setImmediate vs setTimeout (Node.js only)
 * 
 * Explanation:
 * setImmediate runs after the current poll phase.
 * setTimeout(...,0) schedules for the next timers phase.
 * In practice, setImmediate often runs first, but order is not strictly guaranteed across environments.
 */

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));

/**
 * 
 * Possible output
 * 
 * immediate
 * timeout
 * (or sometimes reversed, depending on environment)
*/