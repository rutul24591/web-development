const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve");
    }, 12000);
});

function getData() {
    // JS engine will not wait for promise to get resolved
    p.then((res) => console.log(res));
    console.log("Hello world");
}

getData();

// Output

// Hello world
// Promise resolve
