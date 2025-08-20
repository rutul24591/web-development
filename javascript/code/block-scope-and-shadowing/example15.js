/**
 * !!! var is function scoped and let, const are block scope
 */

function x() {
    var a = 200;
    console.log(a); // 200
}

x();
console.log(a); // Uncaught ReferenceError: a is not defined
