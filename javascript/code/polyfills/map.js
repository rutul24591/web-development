/**
 * The map() method of Array instances creates a new array populated with the results of
 * calling a provided function on every element in the calling array.
 *
 * Signature:
 *      map(callbackFn)
 *      map(callbackFn, thisArg)
 *
 * Parameters:
 *      1. callbackFn(element, index, array)
 * 
 *            element
 *                  The current element being processed in the array.
 *            index
 *                  The index of the current element being processed in the array.
 *            array
 *                  The array map() was called upon.


 *      2. thisArg     -   The value of this(global object i.e Window)
 *
 * 
 * Return value:
 *      A new array with each element being the result of the callback function.
 * */

Array.prototype.myMap = function (cb) {
    const result = [];
    console.log("this:", this); // The array to process

    for (i = 0; i < this.length; i++) {
        const value = cb(this[i], i, this);
        result.push(value);
    }

    return result;
};

const arr = [1, 2, 3, 4, 5];

const res = arr.myMap(function (item) {
    console.log("Map:", item);
    return item * 2;
});

console.log("RES: ", res);
