const crypto = require("node:crypto");
// const stringify = require("node:querystring");

console.log("Start of Program");

//pbkdf2- Password based key derivative function version-2

//This is an synchronous function of pbkdf2 which will block the main thread and these type of synchronus functions does not have any callback functions
crypto.pbkdf2Sync("rutul93848", "salt", 5000000, 20, "sha512");
console.log("Fist synchronous key is generated ");

//Asynchronous function
crypto.pbkdf2("rutul93848", "salt", 50000, 20, "sha512", (err, key) => {
    console.log("Below is the asynchronous key of your password");
    console.log(key.toString("hex"));
});

function addition(x, y) {
    const result = x + y;
    return result;
}

var c = addition(5, 10);
console.log("Addition is: " + c);
