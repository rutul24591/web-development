/**
 * Even when x() has finished executing, it is not garbage collected as a reference still exists.
 */

function x() {
    var a = 8;
    function y() {
        console.log(a); // Not 8, will print 24
    }
    a = 24;
    return y;
}

var z = x();
console.log(z); // f y(){console.log(a)}  This doesn return the value of a(which persists) but the reference to a in lexical environment(memory)
z(); // 24
