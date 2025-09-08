/**
 * !!!
 * Q17. Precedence: await + then
 * 
 * Explanation:
 * 1 → synchronous.
 * await waits for Promise.resolve().then(...).
 * Inside .then → logs 2.
 * After that → logs 3.
 * 
 * NOTE : check example6(imp).js as well
 */

(async () => {
  console.log(1);
  await Promise.resolve().then(() => console.log(2));
  console.log(3);
})();

/** 
 * Output:
 * 
 * 1
 * 2
 * 3
 */