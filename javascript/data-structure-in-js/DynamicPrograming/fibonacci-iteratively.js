/**
 * Iteratively( Bottom Up Approach)
 *
 * Very fast than recursive memoized
 *
 * Equation: n - 1; // Drop non dominant
 *
 * TC: O(n)
 *
 *
 * NOTE: We didn't use memoization in iterative approach because if we had memoized initial
 * call would yield O(n), Second call will yield O(1). Again space would increase without providing my
 * any significant faster execution, so not memoized. Usually when we see DP done iteratively, we'll not do it with
 * memoization.
 *
 * */

let counter = 0;

function fibonacci(n) {
    let fibArray = [];

    fibArray[0] = 0;
    fibArray[1] = 1;

    for (let index = 2; index <= n; index++) {
        counter++;
        fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
    }

    return fibArray[n];
}

const n = 7;
const m = 20;
const o = 40;

// console.log("\n Fibonacci of ", n, "= ", fibonacci(n)); // 13:   0 1 1 2 3 5 8 13
// console.log("\n Counter:", counter); // 6

// console.log("\n Fibonacci of ", m, "= ", fibonacci(m)); // 6765
// console.log("\n Counter:", counter); // 19

console.log("\n Fibonacci of ", o, "= ", fibonacci(o)); // 102334155
console.log("\n Counter:", counter); // 39     Very fast
