console.log("Start of the script");

setTimeout(function () {
    console.log("This is a callback statement");
}, 5000);

console.log("End of the script");

// This is a blocking code. Main thread is blocked for 10 seconds.
// Mimicking a million lines of code which takes 10 seconds to execute and Global execution context is blocked for 10 seconds.
let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While completed");
