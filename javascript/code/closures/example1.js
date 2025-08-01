/**
 *
 * CLOSURE -  A function along with its lexical scope forms a closure.
 * Functions in JS can be passed to another function as argument, can be assigned to a variable and can also be returned.
 *
 *
 * When y() gets executed, it tries to find a in its lexical scopre and if it doesn't find it , it references the lexical scope
 * of parent i.e x() and if found it logs a.
 */

function x() {
    var a = 8;
    function y() {
        console.log(a); //8
    }
    y();
}

x();
