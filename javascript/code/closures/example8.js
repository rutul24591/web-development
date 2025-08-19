/**
 * i would be in Block scope(check dev tools -> sources to debug). let and const are blocked scope.
 * In example7.js, i was in Local scope(x).
 */

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("hello world");
}

x();

/**
 * OUTPUT:
 * Hello world
 * 1
 * 2
 * 3
 * 4
 * 5
 */
