/**
 * LeetCode 15: 3Sum - Two Pointer Approach
 * Time Complexity: O(n^2) + O(nlogn) = O(n^2)
 * Space Complexity: O(1) - excluding output array
 * 
 * Problem: Find all unique triplets in the array that sum to zero
 * Approach: Sort array + Two pointers technique to avoid O(n^3) brute force
 */
function threeSum(nums) {
    // Step 1: Sort the array to enable two-pointer technique and handle duplicates easily
    // Sorting allows us to skip duplicates and use left/right pointers effectively
    nums.sort((a, b) => a - b);

    // Step 2: Initialize result array to store all valid triplets
    let result = [];

    // Step 3: Iterate through the array, fixing the first element of each triplet
    // We only need to iterate up to nums.length - 2 because we need at least 3 elements
    for (let i = 0; i < nums.length - 2; i++) {

        // Step 4: Skip duplicate values for the first element to avoid duplicate triplets
        // If current element is same as previous, skip it to ensure unique triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Step 5: Initialize two pointers for the remaining array
        // left pointer starts right after current element i
        // right pointer starts at the end of array
        let left = i + 1, right = nums.length - 1;

        // Step 6: Use two-pointer technique to find pairs that sum with nums[i] to zero
        while (left < right) {
            // Step 7: Calculate sum of current triplet
            let sum = nums[i] + nums[left] + nums[right];

            // Step 8: Check if we found a valid triplet (sum equals zero)
            if (sum === 0) {
                // Step 8a: Add the triplet to result array
                result.push([nums[i], nums[left], nums[right]]);

                // Step 8b: Skip duplicate values for left pointer to avoid duplicate triplets
                while (left < right && nums[left] === nums[left + 1]) left++;

                // Step 8c: Skip duplicate values for right pointer to avoid duplicate triplets
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Step 8d: Move both pointers to continue searching for more triplets
                left++;
                right--;
            }
            // Step 9: If sum is less than zero, we need a larger sum
            // Move left pointer right to increase the sum (array is sorted)
            else if (sum < 0) {
                left++;
            }
            // Step 10: If sum is greater than zero, we need a smaller sum
            // Move right pointer left to decrease the sum (array is sorted)
            else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]


