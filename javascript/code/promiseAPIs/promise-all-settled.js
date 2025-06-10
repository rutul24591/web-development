
/** Try each example out by uncommenting one by one */


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

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all success', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise allSettled example:', error);
//     });


// Output:

// Response Promise all success 
// (3) [{…}, {…}, {…}]
// 0 : {status: 'fulfilled', value: 'p1 success'}
// 1 : {status: 'fulfilled', value: 'p2 success'}
// 2 : {status: 'fulfilled', value: 'p3 success'}
// length: 3
// [[Prototype]] : Array(0)


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

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise allSettled p1 fail example:', error);
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

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise allSettled p2 fail example:', error)
//     });


// 4. p3 failure scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 6000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p3 error"), 8000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise allSettled p3 failure example:', error);


// 5. All failure scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p1 error"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 error"), 6000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p3 error"), 8000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise allSettled p3 failure example:', error);
//     });