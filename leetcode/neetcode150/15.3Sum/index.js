/**     Two pointer approach
 *      TC: O(n^2) + O(nlogn) = O(n^2)
 *      SC: O(1)
 *      Idea:: We are using two pointers to find the sum of the three numbers.
 *      We are sorting the array first to avoid duplicates.
 *      We are using a for loop to iterate through the array.
 *      We are using a while loop to find the sum of the three numbers.
 *      We are skipping duplicates using the continue statement.
 *      We are pushing the result to the result array.
 *      We are returning the result array.
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for 'i'

        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates for 'left'
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates for 'right'
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]


