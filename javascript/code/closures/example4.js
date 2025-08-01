/**
 * y() forms a closure along with scope of x() and scope of z();
 *
 * SCOPE:
 *    > Local
 *      > this: Window
 *    v Closure (x)
 *        a: 8
 *    v Closure (z)
 *        b: 900
 */

function z() {
    var b = 900;
    function x() {
        var a = 8;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();
