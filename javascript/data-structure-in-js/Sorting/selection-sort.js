/**
 *  TC: o(n ^ 2)
 *  SC: O(1)    Sorting array in place
 * */
function selectionSort(arr) {
    let min;

    // Traverse from 0 till 2nd last element
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;

        // Traverse from 1 till last element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

const result = selectionSort([4, 2, 6, 5, 1, 3]);
console.log("Result of Selection sort ", result);
