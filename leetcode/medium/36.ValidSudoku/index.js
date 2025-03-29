/**
 *      Brute Force Approach
 *      Time Complexity: O(n^2) (If input stays same then we can say O(1))
 *      Space Complexity: O(n) (If input stays same then we can say O(1))
 *      Idea: Use three sets to track rows, columns, and boxes.
 */
function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        let boxSet = new Set();

        for (let j = 0; j < 9; j++) {
            let rowVal = board[i][j];
            let colVal = board[j][i];
            let boxVal = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];

            if (rowVal !== "." && rowSet.has(rowVal)) return false;
            if (colVal !== "." && colSet.has(colVal)) return false;
            if (boxVal !== "." && boxSet.has(boxVal)) return false;

            rowSet.add(rowVal);
            colSet.add(colVal);
            boxSet.add(boxVal);
        }
    }
    return true;
}

/**
 *      Optimal Approach (One pass)
 *      Time Complexity: O(n^2) (If input stays same then we can say O(1))
 *      Space Complexity: O(n) (If input stays same then we can say O(1))
 *      Idea: Use three sets to track rows, columns, and boxes.
 */
function isValidSudokuOptimal(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val === ".") continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            rows[i].add(val);
            cols[j].add(val);
            boxes[boxIndex].add(val);
        }
    }
    return true;
}

/**
 *      Optimal Approach (Bit Masking)
 *      Time Complexity: O(n^2) (If input stays same then we can say O(1))
 *      Space Complexity: O(n) (If input stays same then we can say O(1))
 *      Idea: Use bit masking to track rows, columns, and boxes.
 */
function isValidSudokuOptimal2(board) {
    let rows = new Array(9).fill(0);
    let cols = new Array(9).fill(0);
    let boxes = new Array(9).fill(0);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") continue;

            let num = board[i][j] - '0';
            let bitMask = 1 << num;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if ((rows[i] & bitMask) || (cols[j] & bitMask) || (boxes[boxIndex] & bitMask)) {
                return false;
            }

            rows[i] |= bitMask;
            cols[j] |= bitMask;
            boxes[boxIndex] |= bitMask;
        }
    }
    return true;
}

// Example
console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // Output: true
console.log(isValidSudokuOptimal([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // Output: true
console.log(isValidSudokuOptimal2([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // Output: true