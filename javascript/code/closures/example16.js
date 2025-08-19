/**
 * Conflicting name global variable in jS.
 * Think inner a overshadows outer a. Both are diff.
 */
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}

/**
 * Will this form a closure?
 * Yes it won't matter. inner forms a closure with its outer environment and has access to parent's scope i.e b
 *
 * 1st outest() - calls outest, which returns outer()
 * 2nd () - calls outer with argument Hello world, which inturn return inner
 * close() - calls inner()
 * OUTPUT:
 *
 * 10 Hello world 20
 */

let a = 100; // Placed in different memor space(script)

var close = outest()("Hello world");
close();
