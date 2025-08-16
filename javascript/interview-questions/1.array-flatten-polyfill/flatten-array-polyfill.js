function myFlatArray() {
    const inputArray = this; // 'this' refers to the calling array

    return inputArray.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            // If current element is an array, recursively flatten it
            acc.push(...curr.myFlatArray());
        } else {
            // If it's a primitive value, add directly to accumulator
            acc.push(curr);
        }
        return acc;
    }, []);
}

// 🧠 Attaching custom flatten method to all arrays
Array.prototype.myFlatArray = myFlatArray;

const arr = [
    1,
    2,
    [34, [23, 86, [1, 4, 99]], 78],
    4,
    5,
    [9, 10, 18],
    5,
    6,
    [42, 97],
    7,
];

const result = arr.myFlatArray();

console.log("Result: ", result);
