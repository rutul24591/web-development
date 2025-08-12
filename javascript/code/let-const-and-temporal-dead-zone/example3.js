console.log(a);
// This is temporal dead zone, between variable being hoisted and when it is initialized some value.
let a = 10;
var b = 100;

/** Comment out log for `a` above, for below lines to log */
console.log("b in window & this: ", window.b, this.b); // 100, 100
console.log("a in window & this: ", window.a, this.a); // undefined, undefined
