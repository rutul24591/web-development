/**
 *
 * If all callback queues are empty and event loop is idle it waits at poll phase.
 * Event loop in browser and node are different. In nodejs it waits at poll phase while in browser it does not.
 */

const fs = require("node:fs");
const https = require("node:https");

const a = 100;

setImmediate(() => console.log("Set Immediate"));

setTimeout(() => console.log("TIMER EXPIRED"), 0);

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", "utf-8", () => {
    setTimeout(() => console.log("2. TIMER EXPIRED"), 0);

    process.nextTick(() => console.log("2nd process.nextTick"));

    setImmediate(() => console.log("2nd Set Immediate"));

    console.log("FILE READING CB");
});

// setTimeout(() => console.log("TIMER EXPIRED"), 0);

process.nextTick(() => console.log("process.nextTick"));

// function printA() {
//     console.log("a=", a);
// }

// printA();
console.log("Last Line of the file");

/**
 * Output:
 *
 * Last Line of the file
 * process.nextTick
 * Promise
 * TIMER EXPIRED
 * Set Immediate
 * File reading CB
 */
