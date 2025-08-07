/** Bubble sort
 *
 *  TC: o(n ^ 2)
 *  SC: O(1)    Sorting array in place
 *
 * NOTE: For almost sorted array, the time complexity of insertion sort is O(n) as it can be accomplishes in n passes only.
 * For more efficient sorting algorithms like Merge sort and Quick sort, the time complexity is O(nlogn). Though they are very complex
 * to write, they are faster(for most cases). Merge sort and Quick sort won't be faster for almost sorted arrays, in which case we should
 * prefer to use Insertion sort instead which can run faster.
 *
 *
 */

function insertionSort(arr) {
    let temp;

    /** Start from 1st index to array length */
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];

        /** var is function scoped. Compare previous element/elements */
        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = temp;
    }
    return arr;
}

const arr = [3, 5, 2, 1, 89, 23, 67, 34, 9, 4];

const result = insertionSort(arr);
console.log("Result of Insertion sort ", result);
