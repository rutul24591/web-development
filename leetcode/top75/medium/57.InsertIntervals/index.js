
// 57. Insert Interval
// Medium

// Hint
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.



// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105


/** Solution - Greedy approach  
 *  TC: O(n)
 *  SC: O(n)
 */
var insert = function (intervals, newInterval) {
  const res = [];
  let i = 0;
  const n = intervals.length;
  let [newStart, newEnd] = newInterval;

  // 1) Add all intervals that end before newInterval starts (no overlap).
  while (i < n && intervals[i][1] < newStart) {
    res.push(intervals[i]);
    i++;
  }

  // 2) Merge all overlapping intervals with newInterval.
  // While intervals overlap (i.e., interval.start <= newEnd), expand the new interval.
  while (i < n && intervals[i][0] <= newEnd) {
    newStart = Math.min(newStart, intervals[i][0]);
    newEnd = Math.max(newEnd, intervals[i][1]);
    i++;
  }

  // Add the merged newInterval.
  res.push([newStart, newEnd]);

  // 3) Add the remaining intervals (they start after the merged interval ends).
  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};
// Example usage:
const intervals = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];
console.log(insert(intervals, newInterval)); // [[1,5],[6,9]]