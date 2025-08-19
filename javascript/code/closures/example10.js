function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }

    return inner;
}

/**
 * 1st () - calls outer which returns inner()
 * 2nd () - calls inner
 *
 * OUTPUT:
 *
 * 10
 */
outer()();
