/**
 * The filter() method of Array instances creates a shallow copy of a portion
 * of a given array, filtered down to just the elements
 * from the given array that pass the test implemented by the provided function.
 *
 * Signature:
 *      filter(callbackFn)
 *      filter(callbackFn, thisArg)
 *
 * Parameters:
 *      1. callbackFn(element, index, array)
 * 
 *            element
 *                  The current element being processed in the array.
 *            index
 *                  The index of the current element being processed in the array.
 *            array
 *                  The array filter() was called upon.


 *      2. thisArg     -   The value of this(global object i.e Window)
 *
 * Return value:
 *    A shallow copy of the given array containing just the elements that pass the test.
 *    If no elements pass the test, an empty array is returned.

*/

Array.prototype.myFilter = function (cb) {
    console.log("this", this);

    const result = [];

    for (i = 0; i < this.length; i++) {
        const value = cb(this[i], i, this);
        if (value) {
            result.push(this[i]);
        }

        // value ? result.push(this[i]) : ''    // Equivalent for above
    }

    console.log("result in myFilter", result);

    return result;
};

const arr = ["apple", "orange", "banana", "pineapple", "kiwi"];

// const result = arr.filter((item) => item === "kiwi");

const result = arr.myFilter(function (item) {
    console.log("item: ", item);
    return item === "orange";
});

console.log("result", result);
