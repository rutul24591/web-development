console.log("**** SYNCHRONOUS CODE *****");

var a = 234345334;
var b = 837473;

function multiply(a, b) {
    const result = a * b;
    return result;
}
var c = multiply(a, b);
console.log("Multiplication of a and b is " + c);
