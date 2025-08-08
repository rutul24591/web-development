/**
 * Works based on a pivot which is 0th index
 *
 *
 * TC: O(nlogn) Best case , o(n ^ 2) for already sorted or almost sorted.
 *    Traversing of array in pivot is n and no of times we have to do this is 3 for 8 elements(ideally 7) so it is logn      => nlogn
 *    NOTE: For nearly sorted, make use of insertion sort which could achieve O(n).
 *
 *
 * SC: O(1)
 *    Sorting is in place only, so no additional space required.
 *
 */

/** Swap function taking in array, firstIndex, secondIndex as arguments. Basic swap */
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

/** Pivot
 * 1. pivot helper function takes in array, pivotIndex = 0 and endIndex = array.length - 1 as arguments
 * 2. Initialize pivotIndex to 0 and have a swapIndex initially equal to pivotIndex. This SwapIndex will move.
 * 3. Loop over the entire array starting from 2nd element.
 * 4. Check for element at i is smaller than element at pivotIndex. If so increment swapIndex and call swap function.
 * 5. Once loop is done, swap the pivot element and swapIndex element.
 * 6. Return swapIndex. Normally we return an array but we require the swap variable to be returned
 *    which will be used to quickSort left of pivot array(0, swapIndex - 1) and right(swapIndex + 1, array.length-1) of pivot array.
 */

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex; // This will move

    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }

    swap(array, pivotIndex, swapIndex);

    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    // store result from pivot in pivotIndex i.e the swapIndex returned
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

let myArray = [4, 6, 1, 7, 3, 2, 5];
// console.log("pivot result: ", pivot(myArray)); // 3

console.log("quickSort result: ", quickSort(myArray));
