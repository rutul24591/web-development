/**
 * !!!
 * Q23. Closure Inside setTimeout
 * 
 * Explanation:
 * 
 * Each call to fn() increments the same count inside closure.
 * Timers run later but in order → 1,2,3.
 * 
 * NOTE:
 * 
 * let count = 0;
 * console.log(count++); // Output: 0 (count is now 1)
 * console.log(count);   // Output: 1
 * 
 * let anotherCount = 0;
 * console.log(++anotherCount); // Output: 1 (anotherCount is now 1)
 * console.log(anotherCount);   // Output: 1
 */

function outer() {
  let count = 0;
  return function() {
    setTimeout(() => console.log(++count), 100);
  };
}

const fn = outer();
fn();
fn();
fn();
