/**
 * Conflicting name global variable in jS.
 * Think inner a overshadows outer a. Both are diff.
 * Same as example16 but commented let a = 10;
 */
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        // let a = 10;
        return inner;
    }
    return outer;
}

/**
 * If inner a is commented out it will follow the scope chaining(lexical environment of parent(of parent and so on)
 * until is found and otherwise if not found, it will throw an error)
 *
 * 1st outest() - calls outest, which returns outer()
 * 2nd () - calls outer with argument Hello world, which inturn return inner
 * close() - calls inner()
 *
 * OUTPUT:
 *
 * 100 Hello world 20
 */

let a = 100; // Placed in different memor space(script)

var close = outest()("Hello world");
close();
