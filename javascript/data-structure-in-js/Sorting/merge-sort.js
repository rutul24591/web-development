/** To be used in merge sort
 *
 * Idea is 2 sorted arrays can be merged easily
 *
 * TC: O(nlogn)
 *
 *    logn - Breaking of items in half ie. 8 items takes 3 steps (8 -> 4 -> 2 -> 1).
 *    n - When we combine array, we traverse both the array once so , n + n = 2n => n, ignore constant
 *
 * SC: O(n)
 *    At each split new arrays are created + original array. n arrays(items) + original  => n, ignore constants
 *
 * NOTE: As merge sort doesn't sort original array and returns a new sorted array.
 *      O(nlogn) is pretty close to O(n ^ 2) on graph.
 *      When it comes to sorting algorithms we only have 2 options i.e O(n ^ 2) and O(nlogn). You won't see much difference for smaller item arrays,
 *      but when the items to be sorted are in millions, billions then we see hugh difference.
 */

function merge(array1, array2) {
    let combined = [];
    let i = 0; // To track array1
    let j = 0; // To track array2

    /** Loop over both arrays to compare until either one finishes loop and exit */
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }

    /** Push remaining elements from array1 */
    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }

    /** Push remaining elements from array2 */
    while (j < array2.length) {
        combined.push(array2[j]);
        j++;
    }

    return combined;
}

function mergeSort(array) {
    // Base case. Already sorted
    if (array.length === 1) return array;

    // Recursive case
    let midIndex = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, midIndex)); // 0 inclusive and midIndex exclusive  i.e 0 to midIndex-1
    let right = mergeSort(array.slice(midIndex)); // midIndex inclusive.

    // Remember merge only works on sorted arrays. That is why we recusively call mergeSort above for left and right
    // where each iteration breaks the array in half until a single element array is reached(base case)(single element array is already sorted).
    return merge(left, right);
}

// const mergeResult = merge([2, 3, 5, 8], [1, 4, 6, 7]);
// console.log("mergeResult: ", mergeResult);

const mergeSortResult = mergeSort([2, 5, 8, 1, 3, 7, 6, 4]);
console.log("mergeSortResult: ", mergeSortResult);
