/**
 * The reduce() method of Array instances executes a user-supplied "reducer" callback
 * function on each element of the array, in order, 
 * passing in the return value from the calculation on the preceding element. 
 * The final result of running the reducer across all elements of the array is a single value.
 *
 * Signature:
 *      reduce(callbackFn)
 *      reduce(callbackFn, initialValue)
 *
 * Parameters:
 *      1. callbackFn(accumulator, currentValue, currentIndex, array)
 * 
 *            accumulator
 *                  The value resulting from the previous call to callbackFn. 
 *                  On the first call, its value is initialValue if the latter is specified; 
 *                  otherwise its value is array[0].
 * 
 *            currentValue
 *                 The value of the current element. On the first call, its value is array[0]
 *                 if initialValue is specified; otherwise its value is array[1].
 * 
 *            currentIndex
 *                The index position of currentValue in the array. 
 *                On the first call, its value is 0 if initialValue is specified, otherwise 1
 *            
 *            array
 *                  The array reduce() was called upon.


 *      2. initialValue     -   A value to which accumulator is initialized the first time the callback is called.
 * 
 * Return value:
 *      A new array with each element being the result of the callback function.
 * */

Array.prototype.myReduce = function (cb, initialValue) {
    console.log("this:", this); // Array which is called upon

    let result = initialValue || 0;

    for (i = 0; i < this.length; i++) {
        result = result + cb(this[i], i, this);
    }
    console.log("result:", result);
    return result;
};

const arr = [1, 2, 3, 4, 5];

const result = arr.myReduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("RES: ", result);
