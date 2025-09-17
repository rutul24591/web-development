/**
 * !!!
 * Q24. typeof null
 * 
 * Explanation:
 * Classic JavaScript quirk (legacy bug).
 * null is a primitive, but typeof null gives "object".
 */

console.log("typeof null", typeof null); 
console.log("typeof undefined", typeof undefined);
// console.log("typeof Array", typeof Array);
// console.log("typeof Promise", typeof Promise);
// console.log("typeof Object", typeof Object);
// console.log("typeof NaN", typeof NaN);
// console.log("typeof Number", typeof Number);
// console.log("typeof String", typeof String);


console.log("typeof function", typeof function () {});
console.log("typeof arrow", typeof (() => {}));
console.log("typeof class", typeof class C {});
function* g() {}
console.log("typeof generator fn", typeof g);
console.log("typeof generator instance", typeof g()); // object

async function af() {}
console.log("typeof async fn", typeof af);
console.log("typeof async fn call", typeof af()); // object (Promise)



console.log("typeof Symbol()", typeof Symbol());  // symbol
console.log("typeof Symbol.iterator", typeof Symbol.iterator); // symbol

console.log("typeof 1n", typeof 1n); // bigint

console.log("typeof []", typeof []);  // object
console.log("Array.isArray([])", Array.isArray([]));  // true

console.log("typeof new Date()", typeof new Date());  
console.log("typeof /re/", typeof /re/);

console.log("typeof Math", typeof Math);
console.log("typeof JSON", typeof JSON);

console.log("typeof new Number(1)", typeof new Number(1)); // object (boxed)
console.log("typeof Number(1)", typeof Number(1)); // number (primitive)

console.log("typeof Infinity", typeof Infinity);
console.log("typeof -0", typeof -0);

// Safe even if variable is undeclared:
console.log("typeof notDeclared", typeof notDeclared);

const tag = (v) => Object.prototype.toString.call(v);
console.log(tag([]));           // [object Array]
console.log(tag(new Date()));   // [object Date]
console.log(tag(/re/));         // [object RegExp]
console.log(tag(null));         // [object Null]
console.log(tag(undefined));    // [object Undefined]s
console.log(tag(Symbol()));     // [object Symbol]
console.log(tag(1n));           // [object BigInt]

// Browser-only (if running in a page):
// console.log("typeof document.all", typeof document.all); // "undefined" (weird case)
/**
 * 
 * Output:
 * 
 * object
 */