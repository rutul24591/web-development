async function getData() {
    return "Hello World";
}

const dataPromise = getData();

console.log("dataPromise: ", dataPromise); // Promise {<fulfilled>: "Hello World"}

dataPromise.then((res) => {
    console.log("Res: ", res); // Hello World
});
