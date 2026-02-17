// Now async/await combo is used to handle promises.
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});

async function handlePromise() {
    const value = await p; // Await can be used inside async function only
    console.log("Val: ", value); // Promise resolved
}

handlePromise();
