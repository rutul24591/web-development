/**
 *      Two pointer approach (as array is sorted)   
 *      TC: O(n)
 *      SC: O(1)
 *      Idea::We are using two pointers to find the sum of the two numbers.
 *      We are moving the left pointer to the right if the sum is less than the target.
 *      We are moving the right pointer to the left if the sum is greater than the target.
 *      We are returning the indices of the two numbers.
 */
function twoSum2(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        } else if (sum < target) {
            left++; // Move left pointer to increase sum
        } else {
            right--; // Move right pointer to decrease sum
        }
    }
    return [-1, -1]; // Should never be reached per problem statement
}

console.log(twoSum2([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum2([2, 3, 4], 6)); // [1, 3]
console.log(twoSum2([-1, 0], -1)); // [1, 2]
