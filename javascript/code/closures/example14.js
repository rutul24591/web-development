function outer(b) {
    function inner() {
        console.log(a, b);
    }
    let a = 10;
    return inner;
}

/**
 * Will this form a closure?
 * Yes it won't matter. inner forms a closure with its outer environment and has access to parent's scope i.e b
 *
 * 1st () - calls outer with argument Hello world, which returns inner()
 * 2nd () - calls inner
 *
 * OUTPUT:
 *
 * 10 Hello world
 */
var close = outer("Hello world");
close();
