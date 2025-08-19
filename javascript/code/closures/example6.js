/**
 *
 * setTimeout stores the functions in a separate memory space and attaches a times to itand JS continuos executing rest of code.
 * Once timer expires, JSEngine(event loop) grabs the functions and puts it on callstack and JSEngine executes it.
 */

function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i); // this callback function forms a closure.
    }, 3000);
    console.log("Hello world");
}

x();

/**
 * Output:
 * Hello world
 * 1  ( after 3 sec)
 */
