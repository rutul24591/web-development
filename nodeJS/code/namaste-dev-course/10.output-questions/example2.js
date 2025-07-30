const fs = require("node:fs");
const https = require("node:https");

const a = 100;

setImmediate(() => console.log("Set Immediate"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File reading CB");
});

setTimeout(() => console.log("TIMER EXPIRED"), 0);

function printA() {
    console.log("a=", a);
}

printA();
console.log("Last Line of the file");

/**
 * OUTPUT:
 *
 *
 * a= 100
 * Last Line of the file
 * TIMER EXPIRED
 * Set Immediate
 * File reading CB
 */
