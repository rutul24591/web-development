/**
 * !!!
 * Q25. Object.freeze Mutability
 * 
 * Explanation:
 * 
 * Object.freeze prevents property changes.
 * Assignment silently fails in non-strict mode.
 * In strict mode → TypeError.
 */

const obj = { a: 1, b: { c: 1} };
Object.freeze(obj);
obj.a = 2;
// obj.b.c = 2;
console.log(obj.a);


/**
 * 
 * Output:
 * 
 * 1
 * 
 * Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>' Chrome output
 */