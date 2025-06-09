
// 1. Success scenario
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 6000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 success"), 8000);
// });

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all success', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise all example:', error);
//     });


// 2. p1 failure scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p1 error"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 6000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 success"), 8000);
// });

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise all p1 fail example:', error); // promise-all.js:43 Error encountered in promise all example: p1 error
//     });


// 3. p2 failure scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 error"), 6000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 success"), 8000);
// });

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise all p2 fail example:', error); // promise-all.js:43 Error encountered in promise all example: p2 error
//     });


// 4. p3 failure scenario

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 success"), 6000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3 error"), 8000);
});

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log('Response Promise all p1 failure', res);
    })
    .catch((error) => {
        console.error('Error encountered in promise all p3 failure example:', error); // promise-all.js:43 Error encountered in promise all example: p3 error
    });