/**
 * 
 * 📌 Problem Statement
You are given an array nums containing n distinct numbers in the range [0, n].
Return the only number in the range that is missing from the array.
Example 1
Input: nums = [3, 0, 1]
Output: 2
Explanation: Range is [0,3] → numbers present = [0,1,3] → missing = 2.
Example 2
Input: nums = [0, 1]
Output: 2
Example 3
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
🔑 Constraints
n == nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All numbers are unique.
 */

// Solution 1: Using Sum Formula
// TC: O(n)
// SC: O(1)
// Idea: We are using the sum formula to find the missing number.
// The sum of the first n natural numbers is (n * (n + 1)) / 2.
// We are subtracting the actual sum of the array from the expected sum to get the missing number.
const missingNumber = (nums) => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1]));

// Solution 2: Using Array
// TC: O(n)
// SC: O(n)
// Idea: We are using an array to store the numbers in the array.
// Then, we are iterating through the array and finding the missing number.
var missingNumber2 = function (nums) {
    let n = nums.length;
    let v = new Array(n + 1).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        v[nums[i]] = nums[i];
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] == -1) return i;
    }
    return 0;
};

console.log(missingNumber2([3, 0, 1]));

// Solution 3: Using XOR
// TC: O(n)
// SC: O(1)
// Idea: We are using XOR to find the missing number.
// XOR of a number with itself is 0.
// XOR of a number with 0 is the number itself.
// XOR is associative and commutative.
// So, we can XOR all the numbers in the array and the result will be the missing number.
var missingNumber3 = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log("nums[i]", nums[i], "xor", xor);
        xor ^= nums[i];
    }
    return xor;
};

console.log(missingNumber3([3, 0, 1]));
