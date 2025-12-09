/* 417. Pacific Atlantic Water Flow
Medium

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:
    Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
    Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
    Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
                [0,4]: [0,4] -> Pacific Ocean 
                      [0,4] -> Atlantic Ocean
                [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
                      [1,3] -> [1,4] -> Atlantic Ocean
                [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
                      [1,4] -> Atlantic Ocean
                [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
                      [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
                [3,0]: [3,0] -> Pacific Ocean 
                      [3,0] -> [4,0] -> Atlantic Ocean
                [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
                      [3,1] -> [4,1] -> Atlantic Ocean
                [4,0]: [4,0] -> Pacific Ocean 
                      [4,0] -> Atlantic Ocean
                Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.


Example 2:
    Input: heights = [[1]]
    Output: [[0,0]]
    Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
 

Constraints:
    m == heights.length
    n == heights[r].length
    1 <= m, n <= 200
    0 <= heights[r][c] <= 105
*/

/** Solution : BFS + Queue
 * TC: O(m * n) - where m is number of rows and n is number of columns
 * SC: O(m * n) - visited arrays of size m x n
*/


/**
 * @param {number[][]} heights
 * @return {number[][]}
 *
 * Approach: Reverse BFS from ocean borders.
 */
var pacificAtlantic = function (heights) {
  if (!heights || heights.length === 0) return [];

  const m = heights.length;
  const n = heights[0].length;

  // visited matrices: pacificVisited[r][c] === true if cell can reach Pacific
  // and similarly for atlanticVisited
  const pacificVisited = Array.from({ length: m }, () => Array(n).fill(false));
  const atlanticVisited = Array.from({ length: m }, () => Array(n).fill(false));

  // Helper BFS that starts from all cells in 'starts' queue and marks visited
  function bfs(starts, visited) {
    const q = []; // queue implemented as array with head pointer for efficiency
    let head = 0;

    // enqueue all starts
    for (const [r, c] of starts) {
      visited[r][c] = true;
      q.push([r, c]);
    }

    // 4 directions
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (head < q.length) {
      const [r, c] = q[head++];
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        // check bounds
        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        // If already visited, skip
        if (visited[nr][nc]) continue;
        // Important: reverse flow condition:
        // from neighbor (nr,nc) we can go to (r,c) in original flow if heights[nr][nc] >= heights[r][c]
        // So in reverse BFS we only move to neighbor if heights[nr][nc] >= heights[r][c]
        if (heights[nr][nc] < heights[r][c]) continue;
        visited[nr][nc] = true;
        q.push([nr, nc]);
      }
    }
  }

  // Build starting border cells for Pacific and Atlantic
  const pacificStarts = [];
  const atlanticStarts = [];

  // Top row and bottom row
  for (let c = 0; c < n; c++) {
    pacificStarts.push([0, c]);      // top row -> Pacific
    atlanticStarts.push([m - 1, c]); // bottom row -> Atlantic
  }

  // Left column and right column (avoid duplicates corners are okay if repeated)
  for (let r = 0; r < m; r++) {
    pacificStarts.push([r, 0]);      // left column -> Pacific
    atlanticStarts.push([r, n - 1]); // right column -> Atlantic
  }

  // Run BFS for each ocean
  bfs(pacificStarts, pacificVisited);
  bfs(atlanticStarts, atlanticVisited);

  // Collect cells reachable by both
  const result = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (pacificVisited[r][c] && atlanticVisited[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
};

