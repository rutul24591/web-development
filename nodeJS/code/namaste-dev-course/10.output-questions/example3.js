const fs = require("node:fs");
const https = require("node:https");

const a = 100;

setImmediate(() => console.log("Set Immediate"));

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File reading CB");
});

setTimeout(() => console.log("TIMER EXPIRED"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a=", a);
}

printA();
console.log("Last Line of the file");

/**
 * Output
 * a= 100
 * Last Line of the file
 * process.nextTick
 * Promise
 * TIMER EXPIRED
 * Set Immediate
 * File reading CB
 */
