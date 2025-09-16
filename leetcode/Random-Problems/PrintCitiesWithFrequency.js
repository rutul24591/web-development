/**
 *
 * You are given an array of cities: [Mumbai, Pune, Ahmedabad, Kolkata, Pune, Kolkata, Chennai, Mumbai, Ahmedabad, Pune, New Delhi],
 * how to print the city name and its frequency occurring in the array
 *
 * Eg: Mumbai - 3
 *     Pune - 3
 *     New Delhi - 1
 * Answer it in JavaScript
 *
 */

const cities = [
    "Mumbai",
    "Pune",
    "Ahmedabad",
    "Kolkata",
    "Pune",
    "Kolkata",
    "Chennai",
    "Mumbai",
    "Ahmedabad",
    "Pune",
    "New Delhi",
];

// Example 1: Using Map

// Step 1: Create a frequency map
const frequency = {};

for (const city of cities) {
    frequency[city] = (frequency[city] || 0) + 1;
}

// Step 2: Print the city and its frequency
for (const city in frequency) {
    console.log(`${city} - ${frequency[city]}`);
}

console.log("============================================");
// Example 2: Using Reduce

// Build frequency map in one line
const cityFrequency = cities.reduce((acc, city) => {
    acc[city] = (acc[city] || 0) + 1;
    return acc;
}, {});

// Print results
Object.entries(frequency).forEach(([city, count]) => {
    console.log(`${city} - ${count}`);
});
