/**
 *
 * If all callback queues are empty and event loop is idle it waits at poll phase.
 * Event loop in browser and node are different. In nodejs it waits at poll phase while in browser it does not.
 */

const fs = require("node:fs");
const https = require("node:https");

setImmediate(() => console.log("Set Immediate"));

setTimeout(() => console.log("TIMER EXPIRED"), 0);

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("FILE READING CB");
});

// setTimeout(() => console.log("TIMER EXPIRED"), 0);

process.nextTick(() => {
    /** Recursively generates new ticks, i.e starvation(callbacks are parked to be handled in next cycle),
     * This comes between timer and poll phases. Executes I/o callback deferred to the next loop iteration.
     * Event loop is a while loop only.
     */
    process.nextTick(() => console.log("Inner next Tick 1"));
    process.nextTick(() => console.log("Inner next Tick 2"));
    process.nextTick(() => console.log("Inner next Tick 3"));
    process.nextTick(() => console.log("Inner next Tick 4"));
    Promise.resolve().then(() => console.log("Inner Promise 2"));
    console.log("process.nextTick");
});

// function printA() {
//     console.log("a=", a);
// }

// printA();
console.log("Last Line of the file");

/**
 * Output:
 *
Last Line of the file
process.nextTick
Inner next Tick 1
Inner next Tick 2
Inner next Tick 3
Inner next Tick 4
Promise
Inner Promise 2
TIMER EXPIRED
Set Immediate
FILE READING CB
 */
