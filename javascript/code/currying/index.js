let multiply = function(x, y) {
    console.log('Multiply Result:', x * y);
}


// let multiplyByTwo = function(y){
//     let x = 2;
//     console.log('Multiply by 2 result: ', x * y);
// }

//Exactly same as above
let multiplyByTwo = multiply.bind(this, 2);

// The argument that we pass over here would to param y
multiplyByTwo(5);                                               // 10


let multiplyByThree = multiply.bind(this, 3);

// The argument that we pass over here would to param y
multiplyByThree(5);                                             // 15

let multiplyByTwo2 = multiply.bind(this, 2, 3);

// The argument that we pass over here would to param y
multiplyByTwo2(5);                                              // 6
multiplyByTwo2(2, 3);  // This also works

// USING Function Closures

let multiplyClosure = function(x) {
    return function (y){
        console.log('Multiply using closures: ',x * y);
    }
}

let multiplyBy2C = multiplyClosure(2);
multiplyBy2C(3);

let multiplyBy3C = multiplyClosure(3);
multiplyBy3C(10);


