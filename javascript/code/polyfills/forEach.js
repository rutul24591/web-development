/**
 * The forEach() method of Array instances executes a provided function once for each array element.
 *
 * Signature:
 *      forEach(callbackFn)
 *      forEach(callbackFn, thisArg)
 *
 * Parameters:
 *      1. callbackFn(element, index, array)
 * 
 *            element
 *                  The current element being processed in the array.
 *            index
 *                  The index of the current element being processed in the array.
 *            array
 *                  The array forEach() was called upon.


 *      2. thisArg     -   The value of this(global object i.e Window)
 *
 * Return value:
 *      None(undefined)
 * */

Array.prototype.newForEach = function (cb) {
    // self
    console.log("this: ", this);

    // Take self as second argument and uncomment this line. It will log Window object
    // console.log("self:", self);

    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this); // Check Signature of callbackFn above
    }
};

const arr = [1, 2, 3, 4, 5];

arr.newForEach(function (item, index) {
    console.log("Hey: ", index, item);
}, this);
