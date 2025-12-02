/* 435. Non-overlapping Intervals
Medium

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

Example 1:
  Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
  Output: 1
  Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
  Input: intervals = [[1,2],[1,2],[1,2]]
  Output: 2
  Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
  Input: intervals = [[1,2],[2,3]]
  Output: 0
  Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 
Constraints:
  1 <= intervals.length <= 105
  intervals[i].length == 2
  -5 * 104 <= starti < endi <= 5 * 104 */


/** Solution - Greedy approach  
 *  TC: O(n log n) due to sorting
 *  SC: O(1) or O(n) depending on sorting implementation
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals || intervals.length === 0) return 0;

  // Sort by end time (second element). If equal, can tie-break by start (not required).
  intervals.sort((a, b) => a[1] - b[1]);

  let removals = 0;
  // lastEnd is the end time of the last interval we've kept
  let lastEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= lastEnd) {
      // No overlap — keep this interval and update lastEnd
      lastEnd = end;
    } else {
      // Overlap — we must remove this interval (or conceptually remove one).
      // Since intervals are sorted by end, removing current interval is optimal:
      // the kept interval (last) ends earlier or equal, better for future choices.
      removals++;
      // lastEnd remains the same (we keep the earlier-ending one)
    }
  }

  return removals;
};