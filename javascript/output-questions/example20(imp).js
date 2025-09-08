/**
 * !!!
 * Q20. try/catch with return
 * 
 * Explanation:
 * 
 * finally block overrides any return from try or catch.
 * So only "finally" is returned.
 */

function test() {
  try {
    return "try";
  } catch {
    return "catch";
  } finally {
    return "finally";
  }
}
console.log(test());

/**
 * 
 * Output:
 * 
 * finally
 */
