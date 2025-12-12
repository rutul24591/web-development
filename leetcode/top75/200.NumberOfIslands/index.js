/* 200. Number of Islands
Medium

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 
Example 1:
  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1

Example 2:
  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3
 

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 300
  grid[i][j] is '0' or '1'. */


/** Solution: DFS
 * TC: O(m * n) - where m is number of rows and n is number of columns
 * SC: O(m * n) - in worst case, the grid is filled with lands, we will have m*n recursive calls on the call stack
 */
/**
* @param {character[][]} grid
* @return {number}
*/
function numIslandsDFS(grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  // helper: recursively sink the island (turn '1' -> '0')
  function dfs(r, c) {
    // boundary & water check
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return;
    // mark visited by sinking
    grid[r][c] = '0';

    // explore 4 directions
    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        islands++;
        dfs(r, c); // sink entire connected island
      }
    }
  }

  return islands;
}
