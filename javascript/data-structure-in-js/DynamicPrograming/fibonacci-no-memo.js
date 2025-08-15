/**
 *
 * TC: O(2 ^ n)     Very Inefficient
 *
 * Top Down approach
 */

let counter = 0;

function fibonacci(n) {
    counter++;

    //Base case
    if (n === 0 || n === 1) return n;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 7;
const m = 20;
const o = 40;

// console.log("\n Fibonacci of ", n, "= ", fibonacci(n));   // 13:   0 1 1 2 3 5 8 13
// console.log("\n Counter:", counter);  // 41

// console.log("\n Fibonacci of ", m, "= ", fibonacci(m)); // 6765
// console.log("\n Counter:", counter); // 21891

console.log("\n Fibonacci of ", o, "= ", fibonacci(o)); // 102334155
console.log("\n Counter:", counter); // 331160281       This will take some time to execute
