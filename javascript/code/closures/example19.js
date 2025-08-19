function counter() {
    var count = 0; // Count is now hidden
    return function incCounter() {
        count++;
        console.log("count", count);
    };
}

var counter1 = counter();

counter1();
counter1();

var counter2 = counter(); // This creates a brand new counter(new function unrelated from counter1()).

counter2();

/**
 *
 * Output:
 *
 *
 * 1
 * 2
 * 1
 */
