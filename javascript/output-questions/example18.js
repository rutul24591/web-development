/**
 * Q18. with Objects & Scope (Deprecated)
 * 
 * Explanation:
 * with extends scope chain.
 * Looks up a inside obj.
 * Although discouraged in modern JS (not allowed in strict mode).
 */

const obj = { a: 10 };

with (obj) {
  console.log(a);
}

/**
 * Output:
 * 
 * 10
 */