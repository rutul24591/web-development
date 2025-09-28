/* 


73. Set Matrix Zeroes
Medium

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:

  Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
  Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

  Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

  m == matrix.length
  n == matrix[0].length
  1 <= m, n <= 200
  -231 <= matrix[i][j] <= 231 - 1
 

Follow up:

  A straightforward solution using O(mn) space is probably a bad idea.
  A simple improvement uses O(m + n) space, but still not the best solution.
  Could you devise a constant space solution? 
*/
// Solution 1: Using O(m + n) space

/**
 * 
 * /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes_extraSpace = function (matrix) {
  const m = matrix.length;
  if (m === 0) return;
  const n = matrix[0].length;

  const rows = new Array(m).fill(false);
  const cols = new Array(n).fill(false);

  // Mark rows and columns that should be zeroed
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  // Zero out cells based on marks
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) matrix[i][j] = 0;
    }
  }
};




// Solution 2: Using O(1) space
function setZeroes(matrix) {
  const m = matrix.length;
  if (m === 0) return;
  const n = matrix[0].length;

  // Step 1 & 2: determine if first row or first column have any zeros
  let firstRowZero = false;
  let firstColZero = false;

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Step 3: use first row & column as markers for other rows/cols
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // mark this row
        matrix[0][j] = 0; // mark this column
      }
    }
  }

  // Step 4: zero cells based on markers (skip first row/col)
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) matrix[i][j] = 0;
    }
  }
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) matrix[i][j] = 0;
    }
  }

  // Step 5: zero first row/col if needed
  if (firstRowZero) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0;
  }
  if (firstColZero) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0;
  }
}


let matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

setZeroes_extraSpace(matrix1);
setZeroes(matrix2);

console.log(matrix1); // [[1,0,1],[0,0,0],[1,0,1]]
console.log(matrix2); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]