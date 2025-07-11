/**
 *
 * run this file with `node app.js` .
 * Try running it in REPL(Read, Evaluate, Print, Loop) by hitting `node` in terminal.
 * To exit REPL `.exit`
 */
var a = 30;
var b = 23;
var name = "Rutul Amin";

console.log(a + b);
console.log(name);

//!!! This is the global object provided by nodejs just like `window` or `this` or `self` or `frames` provided by browser.
console.log(global);

console.log(this); // Empty object unlike browser

//!!! globalThis would work across all platforms (web browsers, node, deno)
// console.log(globalThis);

console.log(globalThis === global); // true;
