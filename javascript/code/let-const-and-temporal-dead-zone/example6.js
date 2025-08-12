let a;

const b = 1000;
 
a = 10;

console.log('abc');

 // Needs initialization with some value(which won't change during course of the program run) at declaration time only. 
// Cannot assign it later.
const c; // Uncaught SyntaxError: Missing initializer in const declaration

c = 200;