/**
 * Q29. Async/Await Error Handling
 * 
 * Explanation:
 * 
 * await Promise.reject("fail") throws inside async function.
 * catch handles error and returns "caught".
 */

async function test() {
  try {
    return await Promise.reject("fail");
  } catch (e) {
    return "caught";
  }
}
test().then(console.log);

/**
 * Output:
 * 
 * caught
 */