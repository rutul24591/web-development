/**
 *
 * How to solve the example with var only
 *
 * Wrap the setTimeout within a function(having an argument x) and call the function with current
 * value of i(each iteration). Using closure we created a new copy of i.
 * NOTE: var is function scoped and let, const are blocked scope. If confused check the definition of closure.
 */

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }

        close(i);
    }

    console.log("Hello world");
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
