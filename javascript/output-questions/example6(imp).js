/**
 * !!!
 * Q6. async/await + Event Loop
 *
 * Explanation:
 * await breaks execution → after logging 2, function suspends.
 * console.log(4) executes next.
 * Then async resumes → logs 3.
 */

async function test() {
    console.log(1);
    await console.log(2);
    console.log(3);
}
test();
console.log(4);

/**
 *
 * Output:
 *
 * 1
 * 2
 * 4
 * 3
 */
