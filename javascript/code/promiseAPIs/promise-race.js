
/** Try each example out by uncommenting one by one
 * Result is the first settled promise() i.e either resolved or rejected
 */


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

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise race example:', error);
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

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise race p1 fail example:', error);
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

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise race p2 fail example:', error)
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

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise race p3 failure example:', error);


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

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log('Response Promise all p1 failure', res);
//     })
//     .catch((error) => {
//         console.error('Error encountered in promise race p3 failure example:', error);
//     });