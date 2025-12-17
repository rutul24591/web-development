/* 207. Course Schedule

Medium

Hint
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:
  Input: numCourses = 2, prerequisites = [[1,0]]
  Output: true
  Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0. So it is possible.

Example 2:
  Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
  Output: false
  Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Constraints:
  1 <= numCourses <= 2000
  0 <= prerequisites.length <= 5000
  prerequisites[i].length == 2
  0 <= ai, bi < numCourses
  All the pairs prerequisites[i] are unique. */


/** Solution: DFS Cycle Detection
 *  TC: O(V + E) - We visit each node and edge once
 *  SC: O(V) - The recursion stack and state array
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course); // edge pre -> course
  }

  const state = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited

  function dfs(node) {
    if (state[node] === 1) return false; // found a cycle
    if (state[node] === 2) return true;  // already processed, no cycle from here

    state[node] = 1; // mark visiting
    for (const nei of graph[node]) {
      if (!dfs(nei)) return false;
    }
    state[node] = 2; // done processing this node
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0) {
      if (!dfs(i)) return false;
    }
  }
  return true;
};
