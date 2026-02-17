const p = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});

async function getData() {
    return p;
}

const dataPromise = getData(); // Promise {<fulfilled>: "Promise resolved"}
dataPromise.then((res) => {
    console.log("RES: ", res); // Promise resolved
});
