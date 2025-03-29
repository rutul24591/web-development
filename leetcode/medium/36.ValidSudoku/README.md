# Valid Sudoku - JavaScript Solutions

## Problem Statement
A **Sudoku** board is a 9×9 grid where:
- Each row must contain the digits `1-9` without repetition.
- Each column must contain the digits `1-9` without repetition.
- Each of the `3x3` sub-boxes must contain the digits `1-9` without repetition.

### Example Input
```js
board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
```
### Output
```js
true
```

## Solutions

### 1. Brute Force Approach (Nested Loops)
```js
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
```

### 2. Optimized Approach (Single Pass)
```js
function isValidSudoku(board) {
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
```

### 3. Bitwise Optimization (Using Bit Masking)
```js
function isValidSudoku(board) {
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
```

## Complexity Comparison

| Approach              | Time Complexity | Space Complexity | Notes |
|-----------------------|----------------|------------------|----------------------|
| Brute Force (Hash Sets) | \(O(1)\) | \(O(1)\) | Simple but uses 3 sets per iteration |
| Optimized (Single Pass) | \(O(1)\) | \(O(1)\) | Efficient and easy to implement |
| Bitwise (Bit Masking) | \(O(1)\) | \(O(1)\) | Space-efficient, uses bitwise operations |
