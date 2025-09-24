/* 347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2

    Output: [1,2]

Example 2:

    Input: nums = [1], k = 1

    Output: [1]

Example 3:

    Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

    Output: [1,2]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size. 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Bucket sort approach

var topKFrequent = function (nums, k) {
  if (k === 0) return [];
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const bucket = new Array(nums.length + 1).fill(null).map(() => []);

  for (const [num, count] of map.entries()) {
    bucket[count].push(num);
  }

  let result = [];

  for (let f = bucket.length - 1; f >= 0 && result.length < k; f--) {
    if (bucket[f].length > 0) {
      for (let num of bucket[f]) {
        result.push(num);
        if (result.length === k) break;
      }
    }
  }
  return result;
};

