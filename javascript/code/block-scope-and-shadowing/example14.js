/**
 * var is function scoped and let, const are block scope
 */

const a = 10;

console.log(a); // 10

function x() {
    var a = 200;
    console.log(a); // 200
}

x();
console.log(a); // 10
