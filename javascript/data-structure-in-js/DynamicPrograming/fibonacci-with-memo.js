/**
 *
 * TC: O(n)
 *
 * Top Down approach
 *
 * Compare it with without memo, you will see a huge difference.
 *
 * For n = 7, we will have to make 13 different calls(F(1), F(2), F(2),.. )
 * For n = 8, we will have to make 2 more function calls than fibonacci(7)
 *
 * Equation forms: 2n - 1 (Drop non dominant i.e 1 and Constant 2 => O(n))
 */

let counter = 0;
let memo = [];

function fibonacci(n) {
    console.log(`n`, n);
    counter++;

    if (memo[n] !== undefined) {
        return memo[n];
    }

    //Base case
    if (n === 0 || n === 1) return n;

    // Recursive case
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

    return memo[n];
}

const n = 7;
const m = 20;
const o = 40;

console.log("\n Fibonacci of ", n, "= ", fibonacci(n)); // 13:   0 1 1 2 3 5 8 13
console.log("\n Counter:", counter); // 13

// console.log("\n Fibonacci of ", m, "= ", fibonacci(m)); // 6765
// console.log("\n Counter:", counter); // 40

// console.log("\n Fibonacci of ", o, "= ", fibonacci(o)); // 102334155
// console.log("\n Counter:", counter); // 81    fast
