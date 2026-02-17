const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve p");
    }, 12000);
});

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve p1");
    }, 6000);
});

async function handlePromise() {
    console.log("Hello");

    // JS engine will wait for promise to get resolved
    const value = await p; // Blocking, as it will wait for Promise to get resolved
    console.log("Hello world");
    console.log(value);

    const value2 = await p1;
    console.log("Hello world 2");
    console.log(value2);
}

handlePromise();

// Output

// Hello                -> Prints immediately. After 12 seconds(not 24) everthing else is printed yes.
// Hello world
// Promise resolve p
// Hello world 2
// Promise resolve p1
