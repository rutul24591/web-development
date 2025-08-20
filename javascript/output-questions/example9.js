/** Doubt about output. Might not be correct !!!
 *
 * Q9. IIFE with var
 * 
 * Explanation:
 * var a = b = 5 → assigns b = 5 without declaration → leaks to global.
 * a is local var → undefined outside.
 * b becomes global → typeof b is "number".
 */


(function () {
  var a = b = 5;
})();
console.log(typeof a, typeof b);

/**
 * 
 * Output
 * 
 * undefined number

 */
