/**
 * Q2. Closure & Loop with var
 *
 * Explanation:
 * var is function-scoped.
 * By the time the callbacks run, loop ends and i = 3.
 * All closures capture the same reference.
 * If we used let, output would be 1 2 3.
 *
 */
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 100);
}

/** Output
 *
 * 3
 * 3
 * 3
 */

// With var only
// for (var i = 1; i <= 3; i++) {
//     function close(x) {
//         setTimeout(() => console.log(x), 300);
//     }
//     close(i);
// }

/** Output
 *
 * 1
 * 2
 * 3
 */
