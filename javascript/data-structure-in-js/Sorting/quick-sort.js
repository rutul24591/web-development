/**
 * Works based on a pivot which is 0th index
 *
 *
 * TC:
 *
 * SC:
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
