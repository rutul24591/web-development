/**
 *
 * Is 19 a good way to do it & is it scalable?
 *
 * We can implement using function constructors and achieve same(closure and encapsulation).
 * Check below
 */

function Counter() {
    var count = 0; // Count is now hidden

    this.incCounter = function () {
        count++;
        console.log("count", count);
    };
    this.decCounter = function () {
        count--;
        console.log("count dec:", count);
    };
}

var counter1 = new Counter();

counter1.incCounter();
counter1.incCounter();

counter1.decCounter();

/**
 *
 * Output:
 *
 *
 * 1
 * 2
 * 1
 */
