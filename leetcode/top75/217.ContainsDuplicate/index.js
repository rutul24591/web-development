/**
 *      Brute Force Approach
 *      Time Complexity: O(n^2) (Nested loop for all pairs)
 *      Space Complexity: O(1) (No extra storage.)
 *      Idea: Use two nested loops to check every pair.
 */

function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

/**
 *      Optimal Approach(Hashing or HashMap)
 *      Time Complexity: O(n) (We traverse the array once.
 *      Space Complexity: O(n) (In the worst case, we store all elements in the Set.
 *      Idea: Use a Set to store unique elements.
 */

function containsDuplicateOptimal(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

// Example
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true

// Example
console.log(containsDuplicateOptimal([1, 2, 3, 4])); // Output: false
console.log(containsDuplicateOptimal([1, 2, 3, 1])); // Output: true

