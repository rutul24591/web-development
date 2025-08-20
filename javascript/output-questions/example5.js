/**
 * Q5. Function Hoisting
 *
 * Explanation:
 *
 * Function declarations are hoisted fully → foo works.
 * bar is hoisted as undefined → calling bar() throws TypeError.
 *
 */
foo();

function foo() {
    console.log("Hello");
}
// console.log(bar);
bar();

var bar = function () {
    console.log("World");
};

/** Output
 *  Hello
 *  Uncaught TypeError: bar is not a function
 */
