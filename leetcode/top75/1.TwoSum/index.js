/**
 *      Brute Force Approach
 *      Time Complexity: O(n^2) (due to the nested loop.)
 *      Space Complexity: O(1) (since no extra storage is used apart from the input.)
 */

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
 *      Optimal Approach(Hashing or HashMap)
 *      Time Complexity: O(n) (Iterate through the array once)
 *      Space Complexity: O(n) (Store elements in the map)
 */

function twoSumOptimal(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumOptimal([2, 7, 11, 15], 9)); // Output: [0, 1]