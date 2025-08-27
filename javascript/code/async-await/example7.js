const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve");
    }, 12000);
});

async function handlePromise() {
    console.log("Hello");

    // JS engine will wait for promise to get resolved
    const value = await p; // Blocking, as it will wait for Promise to get resolved
    console.log("Hello world");
    console.log(value);

    const value2 = await p;
    console.log("Hello world 2");
    console.log(value2);
}

handlePromise();

// Output

// Hello                -> Prints immediately. After 10 seconds(not 20) everthing else is printed yes.
// Hello world
// Promise resolve
// Hello world
// Promise resolve
