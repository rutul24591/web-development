/** Bubble sort */
const bubbleSort = (nums) => {
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return nums;
};

const arr = [3, 5, 2, 1, 89, 23, 67, 34, 9, 4];

const result = bubbleSort(arr);
console.log("result: ", result);
