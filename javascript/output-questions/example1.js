/**
 * Q1. Hoisting & TDZ
 *
 * Explanation:
 *
 * let variables are hoisted but stay in the Temporal Dead Zone (TDZ) until initialization.
 * First console.log(a) → ReferenceError.
 * If a were declared with var, it would have logged undefined.
 * b is undefined until assignment.
 */

console.log(a);
let a = 10;
console.log(b);
var b = 20;

// Output:
// ReferenceError: Cannot access 'a' before initialization
