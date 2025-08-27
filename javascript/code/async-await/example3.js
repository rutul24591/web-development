// How we used to handle Promise previously
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});

function getData() {
    p.then((res) => console.log(res)); // Promise resolved
}

getData();
