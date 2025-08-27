const p = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});

async function getData() {
    return p;
}

const dataPromise = getData(); // Promise {<fulfilled>: "Hello World"}
dataPromise.then((res) => {
    console.log("RES: ", res); // Hello World
});
