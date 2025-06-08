// PROMISES
// Promises are used to handle async operations in Javascript.

// Consider e-commerce App.

// const cart = ["shoes", "Boxers", "Shirts", "Trousers"];


// createOrder(cart);  // orderId;

// proceedToPayment(orderId);

// Both the above APIS are asynchronous and dependent on each other. ProceedToPayment only once createOrder is completed.

// Previously we pass callback function.
// PROBLEM: Passing this way, it becomes responsibility of createOrder to make a call to proceedToPayment API once orderId is recieved.
// Doing this way it leads to inversion of control. i.e we done have control over createOrder. 
// Can't blindly trust, might be get called twice or do not call at all, 
// might be written by some other team or other team member who is junior and might have done proper error handling. 
// Its not reliable.

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// Promises comes into picture.

// const promise = createOrder(cart);

//  When JS Engine executes the above line, it will return an empty object(Promise){ data: undefined}, continue with exectuing rest of code and after few seconds 
// or whatever time it will return the actual data. {data: undefined becomes [{...},{...}]}. Once this is done it will call below automatically

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// Previously using callbacks, we were passing callback function to another function        <--- !!! Important
// but here we are attaching the callback function to the promise object.
// By attaching the callback we have the control of the program with us only. 
// By doing this way, it guarentees that provided callback function will get called and only once.

// A Promise is an object.           <--- !!!

// fetch is provided by browser and not by javascript.
const GITHUB_API = "https://api.github.com/users/rutul24591";

const users = fetch(GITHUB_API);

console.log(`users:`, users);      // This log will show Promise: Pending and it you expand it will show Fulfilled (Just a bug in chrome.), Why? 
// Javascript won't wait  and execute this line before response is received. 

/**
 * 
 * Place a debugger on const users = fetch(GITHUB_API) line and move to next step of debug
 * 
 * Scope:
 *   >  Script               (down arrow)
 *      GITHUB_API: "https://api.github.com/users/rutul24591",
 *      > users : Promise        (down arrow)
 *          > [[Prototype]]: Promise
 *            [[PromiseState]]: Pending                  <-- Pending, Fulfilled
 *            [[PromiseResult]]: undefined               <-- Will store data

 */

// 3 stated of promises: Pending , Fulfilled , Rejected
// The data returned by the promise is immutable, so changes can take place like users[0].name = 'Padm Amin'

users.then(function(data){
    console.log(`data: `, data);
});


// INTERVIEWS:
/** 
 * 1. What is promise? (How to answer) 
 * 
 *  Def a. Promise is a placeholder whose value will be filled after some time once the asynchronous operation is finished.
 *  Def b. Promise is a container for future value.
 *  Def c. A Promise is an object representing the eventual completion or failure of an asynchronous operation. ( <--- mdn docs definition)
 * 
 * */



/** Above we solve inversion of control issue
 * How to resolve call back hell */


// createOrder(cart, function(orderId){
//     proceedToPayment(orderId, function(paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWalletBalance(); // and so on
//         })
//     });
// });

// The above code can be considered a callback hell.(Pyramid of Doom). This can be solved using Promise Chaining

// When chaning(using lot ot thens), we want to pipe the data i.e data should flow in the whole chain, 
// so we pass the data using return 
// createOrder(cart)
//     .then(function(orderId){
//         return proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo){
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function(paymentInfo){
//         return updateWalletBalance(paymentInfo);
//     });

// Also correct using arrow functions. Looks more lean, but affects readability(opinion varies person to person)
// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(paymentInfo => updateWalletBalance(paymentInfo));


// 2. What are the advantages of promises?







/** PROMISE CHAIN */

const cart = ["shoes", "Boxers", "Shirts", "Trousers"];

// // Consumer Part
// const promise = createOrder(cart); // orderId

// promise.then(function(orderId){
//     // proceedToPayment(orderId); // Not defined so commenting
//     console.log(`orderId ${orderId}`);
// })
// // Gracefully handle the error, otherwise console will show this error in red.
// .catch(function(error){
//     console.log(`ERROR ENCOUNTERED`, error.message);
// });


// Lets write it in more clearer fashion
// Consumer Part
createOrder(cart)
    .then(function(orderId){
        console.log(`orderId:`, orderId);
        return orderId;    // We can return any data here or a Promise
    })
    // Catch could be placed here as well to handle errors above and continue the chain 
    // i.e if cart fails and if you want payment and rest of chain to continue
    .catch(function(error){
        console.log(`ERROR ENCOUNTERED in createOrder`, error.message);
    })
    .then(function(orderId) {
        return proceedToPayment(orderId); // ProceedToPayment is a Promise
    })
    .then(function(paymentInfo){
        console.log('paymentInfo', paymentInfo);
    })
    // Gracefully handle the error, otherwise console will show this error in red.
    .catch(function(error){
        console.log(`ERROR ENCOUNTERED`, error.message);
    })


// Let us write the createOrder function (Producer part)
function createOrder(cart){
    // Create a promise using the Promise constructor and invoke using new keyword.
    // This Promise constructor will take a function which has 2 params: resolve, reject (Provided by javascript by design of Promise API)
    const prms = new Promise(function(resolve, reject){
        // createOrder
        // 1. Validate Cart

        if(!validateCart(cart)){
            // Need to handle it gracefully. Use Catch 
            const error = new Error("Cart is not valid")
            reject(error);
        }
        // 2. Logic for createOrder.Place order. Interact with database, etc. and receive orderId
        const orderId = "12345";

        if(orderId){
            // resolve(orderId);
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });

    return prms;
}

// Dummy 
function validateCart(cart){
    return true; // Make it false to reject the promise
}


function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        // Do write necessary code for payment
        resolve("Payment Successful");
    });
}