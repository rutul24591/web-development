// 1. Traversal Patterns

const matrix = [
    [2, 7, 1],
    [89, 24, 21],
    [12, 99, 53],
];

// A. Row wise Traversal
// Utility: Counting, Searching , Flattening

// for (let row = 0; row < matrix.length; row++) {
//     console.log("Row item: ", matrix[row]);
//     for (let column = 0; column < matrix[0].length; column++) {
//         console.log(matrix[row][column]);
//     }
// }

// B. Column wise Traversal
// Utility: Transpose, Rotations and column sums
// for (let column = 0; column < matrix.length; column++) {
//     console.log("Column item: ", matrix[column]);
//     for (let row = 0; row < matrix[0].length; row++) {
//         console.log(matrix[row][column]);
//     }
// }

// C. Diagonal Traversal
// Problems: Diagonal Sum, diagonal traversal

// NOTE: A matrix with R rows and C columns have diagonals : M + N - 1
for (
    let diagonal = 0;
    diagonal < matrix.length + matrix[0].length - 1;
    diagonal++
) {
    // console.log("diagonal:", diagonal); // 0,1,2,3,4
    for (let row = 0; row < matrix.length; row++) {
        // console.log("row:", row); // 0,1,2
        let column = diagonal - row;
        //!!! console.log("column:", column); // 0,1,2,3,4 i.e 3 and 4 index won't exist, so we add 2nd condition in below if condition

        if (column >= 0 && column < matrix[0].length) {
            console.log(matrix[row][column]);
        }
    }
}
