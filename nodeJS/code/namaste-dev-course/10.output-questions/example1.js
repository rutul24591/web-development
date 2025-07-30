process.nextTick(() => {
    console.log("NEXT TICK");
});

Promise.resolve(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("set Timeout");
}, 0);

setImmediate(() => {
    console.log("set Immediate");
});

fs.readFile("./file.txt", () => {
    console.log("Reading file");
});

// https.get("https://jsonplaceholder.typicode.com/todos/1", async (response) => {
//     const data = await response.json();
//     console.log("data", data);
// });

/**
 *
 * OUTPUT:
 *
 * NEXT TICK
 * set Timeout
 * set Immediate
 * Reading file
 *
 */
