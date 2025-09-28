/* 54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

TC: O(m * n)
SC: O(1)

Example 1:

  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  Output: [1,2,3,6,9,8,7,4,5]

Example 2:

  Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  Output: [1,2,3,4,8,12,11,10,9,5,6,7]


Constraints:

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 10
  -100 <= matrix[i][j] <= 100 
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  if (!matrix || matrix.length === 0) return result;

  /**
      top — first row index not yet visited
      bottom — last row index not yet visited
      left — first column index not yet visited
      right — last column index not yet visited
   */
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 00 01 02
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // 02 12 22
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }
  return result;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(spiralOrder(matrix2)); // [1,2,3,4,8,12,11,10,9,5,6,7]

const matrix3 = [[1, 2, 3, 4]];
console.log(spiralOrder(matrix3)); // [1,2,3,4]