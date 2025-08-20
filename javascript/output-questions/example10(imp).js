/**
 * !!!
 * Q10. Promise Chain Trap
 * 
 * Explanation:
 * Chain:
 * First then → logs 1, returns 2
 * Second then → logs 2, throws error
 * Next then skipped
 * catch handles error.
 */

Promise.resolve(1)
  .then(x => {
    console.log(x);
    return x + 1;
  })
  .then(x => {
    console.log(x);
    throw new Error("Oops!");
  })
  .then(x => console.log("Never", x))
  .catch(err => console.log("Caught:", err.message));


  /**
   * 
   * Output:
   * 
   * 1
   * 2
   * Caught: Oops!
   */