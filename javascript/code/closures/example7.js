/**
 *
 * i retains the reference of and not value.
 * JS engine will continue executing the code i.e Hello world gets printed and loop runs.
 * By the time the timer has expires(it is very late), the value of i reference to 6.
 * i would be in Local scope(check dev tools -> sources to debug)
 * var is function scoped
 */

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("hello world");
}

x();
