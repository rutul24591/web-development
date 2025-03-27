/**
 *      Brute Force Approach
 *      Time Complexity: O(n^2)
 *      Space Complexity: O(1)
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
 *      Time Complexity: O(n)
 *      Space Complexity: O(n)
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