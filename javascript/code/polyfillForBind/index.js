// What if you want to use bind but it is not available in some browsers, we have to implement it manually(polyfill).

let nameObj = {
    fName: 'Rutul',
    lName: 'Amin'
}

console.log('################## EXAMPLE 1 ###################');

let printName = function() {
    console.log(this.fName + ' ' + this.lName);
}

let printMyName = printName.bind(nameObj);
printMyName();


// Task is to write custom bind function which should be available for use just like bind method

// This allows to attach myBind to Function object. Using call
Function.prototype.myBind = function(...args) {
    console.log(this);
    let obj = this;
    // this points to printName method
    return function(){
        // printName();
        obj.call(args[0]);
    }
}

// Using apply
// Function.prototype.myBind = function (obj) {
//     let obj = this;
//     return function () {
//       obj.apply(obj);
//     };
//   };


let printMyName2 = printName.myBind(nameObj);
printMyName2(); // Calling this we now have a basic functionality of bind, but there still more. Suppose if more arguments are provided what about it. let printMyName2 = printName.myBind(nameObj, 'Ahmedabad');


console.log('################## EXAMPLE 2 ###################');
let printNameModified = function(hometown) {
    console.log(this.fName + ' ' + this.lName + ' from ' + hometown);
}


Function.prototype.myBind2 = function(...args) {
    console.log(...args);
    console.log(this);
    let obj = this;
    let params = args.slice(1); // Gives us rest of args except first one

    console.log('params: ', params)
    // this points to printName method
    return function(){
        obj.apply(args[0], params);
    }
}


let printMyName3 = printNameModified.myBind2(nameObj, 'Ahmedabad');
printMyName3(); 

// Is the bind implementation complete. Nope Consider another argument state





console.log('################## EXAMPLE 3 ###################');

let printNameModified2 = function(hometown, state) {
    console.log(this.fName + ' ' + this.lName + ' from ' + hometown + ' ' + state);
}


Function.prototype.myBind3 = function(...args) {
    console.log(...args);
    console.log(this);
    let obj = this;
    let params = args.slice(1); // Gives us rest of args except first one
    // 1. Can apply checks here is the provided function is a function
    // 2. Can apply checks where args are correct.
    console.log('params: ', params)
    // this points to printName method
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}


let printMyName4 = printNameModified2.myBind3(nameObj, 'Ahmedabad');
printMyName4("Gujarat"); 


// Testing
// Will use myBind3 only
console.log('################## EXAMPLE 3 ###################');

let printNameModified3 = function(hometown, state, country) {
    console.log(this.fName + ' ' + this.lName + ' from ' + hometown + ' ' + state + ' ' + country);
}


let printMyName5 = printNameModified3.myBind3(nameObj, 'Ahmedabad');
printMyName5("Gujarat", "India");



let printMyName6 = printNameModified3.myBind3(nameObj, 'Ahmedabad', 'Gujarat');
printMyName6("India");
