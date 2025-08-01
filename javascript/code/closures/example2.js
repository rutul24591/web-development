/**
 *
 * CLOSURE -  A function along with its lexical scope forms a closure.
 *
 */

function x() {
    var a = 8;
    function y() {
        console.log(a); //8
    }
    return y;
}
var z = x();
console.log(z); // f  y(){...}   not a function but a closure was returned.
z(); // When a function is returned from another function, they still retain there lexical scope(remembers where they were actually present)
