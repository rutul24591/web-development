const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve");
    }, 12000);
});

async function getData() {
    // JS engine will wait for promise to get resolved
    const value = await p; // Blocking, as it will wait for Promise to get resolved
    console.log("Hello world");
    console.log(value);
}

getData();

// Output

// Hello world
// Promise resolve
