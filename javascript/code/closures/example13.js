function outer() {
    function inner() {
        console.log(a);
    }
    const a = 10;
    return inner;
}

/**
 * Will this form a closure? Yes it won't matter.
 *
 * 1st () - calls outer which returns inner()
 * 2nd () - calls inner
 *
 * OUTPUT:
 *
 * 10
 */
outer()();
