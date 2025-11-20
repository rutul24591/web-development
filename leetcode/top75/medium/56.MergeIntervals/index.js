/* 56. Merge Intervals
Medium

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 
Example 1:
  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
  Input: intervals = [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Example 3:
  Input: intervals = [[4,7],[1,4]]
  Output: [[1,7]]
  Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 
Constraints:
  1 <= intervals.length <= 104
  intervals[i].length == 2
  0 <= starti <= endi <= 104 */


/** Solution: Merge overlapping intervals by sorting and merging
 *  TC: O(n log n) due to sorting
 *  SC: O(n) for the output array in the worst case
 */
var merge = function (intervals) {
  if (!Array.isArray(intervals) || intervals.length <= 1) return intervals;

  // Sort intervals by start time (if tie, by end time for stability)
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const merged = [];
  // Start with the first interval
  merged.push([...intervals[0]]); // clone to avoid mutating input

  for (let i = 1; i < intervals.length; i++) {
    const [curStart, curEnd] = intervals[i];
    const last = merged[merged.length - 1];
    const lastStart = last[0];
    const lastEnd = last[1];

    // If current interval overlaps or touches the last merged interval
    if (curStart <= lastEnd) {
      // Merge by extending the end if needed
      last[1] = Math.max(lastEnd, curEnd);
    } else {
      // No overlap — push a copy
      merged.push([curStart, curEnd]);
    }
  }

  return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals)); // Output: [[1,6],[8,10],[15,18]]