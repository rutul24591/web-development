const arr = [3,6,1,5,2];

const persons = [
    {firstName: 'Rutul', lastName: 'Amin', age: 34},
    {firstName: 'Doland', lastName: 'Trump', age: 78},
    {firstName: 'Sleepy', lastName: 'Joe', age: 82},
    {firstName: 'Shashi', lastName: 'Tharoor', age: 55},
    {firstName: 'Joe', lastName: 'Doe', age: 34},
]


/** MAP */

// Double the values of array into a new array
function double(x){
    return 2 * x;
}

const dblOut = arr.map(double);
console.log('Double output',dblOut);


// Triple the values of array into a new array
function triple(x){
    return 3 * x;
}

const tplOut = arr.map(triple);
console.log('Triple output: ', tplOut);


// Find the Binary values of array into a new array
function toBinary(x){
    return x.toString(2);
}

// Valid
// const binOut = arr.map(function toBinary(x){
//     return x.toString(2);
// });

// Valid one liner
// const binOut = arr.map((x) => x.toString(2));

const binOut = arr.map(toBinary);
console.log('Binary output: ', binOut);


const combineFAndLName = persons.map(x => x.firstName + ' ' + x.lastName);
console.log('combine names:', combineFAndLName);







/** FILTER */
// isEven
function isEven(x){
    return x % 2 === 0;
}

const evens = arr.filter(isEven);
console.log('evens: ', evens);

// isOdd
function isOdd(x){
    return x % 2 === 1;
}

const odds = arr.filter(isOdd);
console.log('odds: ', odds);


// Greater than 4
function greaterThan4(x) {
    return x > 4;
}

const greater4 = arr.filter(greaterThan4);
console.log('Greater than 4: ', greater4);

// Greater than 4
function lessThan3(x) {
    return x < 3;
}

const less3 = arr.filter(lessThan3);
console.log('Less than 3: ', less3);










/** REDUCE */

// Used to generate a single value EG sum or max.

// Normal way
function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log('SUM Normal:', findSum(arr));

const redSumOutput = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log('SUM reduce:', redSumOutput);

// Normal way
function findMax(arr){
    let max = 0;
    for(let i=0;i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log('MAX Normal:', findMax(arr));

const redMaxOutput = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0);

console.log('MAX reduce:', redMaxOutput);


// Print {34: 2, 82:1, 55: 1, 78: 1}

const printAgeObj = persons.reduce(function(acc, curr){
    if(acc[curr.age]){
        // acc[curr.age] = acc[curr.age]++; // First assign, then increase
        acc[curr.age] = ++acc[curr.age]; // First increase , then assign
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log('Print Age Object:', printAgeObj);

// Print firstName of all person whose age is greater than 34

const greaterThan34 = persons.reduce(function(acc, curr) {
    if(curr.age > 34){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log('greaterThan34: ', greaterThan34);

/** CHAINING COMBO */

// Print firstName of all person whose age is greater than 34
const chain = persons.filter((x) => x.age > 34).map(p => p.firstName);
console.log('Chaining example: ', chain)