console.log("abc");

let a = 10; // Console will throw Uncaught SyntaxError: Identifier 'a' has already been declared.
// No other line is executed('abc' wont be printed)
let a = 100;

var a = 1000; // Same case as above, will throw Uncaught SyntaxError: Identifier 'a' has already been declared.

var b = 10;
var b = 1000; // In case of var we can reinitialize. No issues
