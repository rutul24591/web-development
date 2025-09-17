/**
 * !!!
 * Q28. Array Holes
 * 
 * Explanation:
 * 
 * [1, , 3] creates a hole (missing element).
 * Length is 3.
 * arr[1] → undefined.
 * But index 1 in arr → false (property doesn’t exist).
 * 
 * 
 * 
 * 
 * NOTE: 
 * in on array checks for if index exists in array or not
 * 
 * const myArray = ['apple', 'banana', 'cherry'];
 * 
 * // Checking for index existence
 * console.log(0 in myArray);    // true (index 0 exists)
 * console.log(1 in myArray);    // true (index 1 exists)
 * console.log(3 in myArray);    // false (index 3 does not exist)
 * 
 * 
 */

const arr = [1, , 3];
console.log(arr.length, arr[1], 1 in arr);

console.log(arr);
/**
 * Output:
 * 
 * 3 undefined false
 * 
 */