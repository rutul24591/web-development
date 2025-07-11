// Here we are making calculate folder as separate module in itself(abstracting), with
// app.js not knowing how file, functions are structured here.
const { calculateMultiply } = require("./multiply");
const { calculateSum } = require("./sum");

// #exporting modules
module.exports = { calculateSum, calculateMultiply };
