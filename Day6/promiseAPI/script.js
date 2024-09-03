// The Promise API
// Creating some Promises

let myP1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("First Promise Resolved !");
    },1500);
});

let myP2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Second Promise Resolved !");
        // reject(new Error("There is some error occured !"));
    },2000);
});

let myP3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Third Promise Resolved !");
    },2000);                                                        // this will decide the time for all Promises
});

// On the place of using then() for getting one by one here we are using Promise.all() to retrieve the data at Once
// Getting the array of all the Promises
let allPromises = Promise.all([myP1,myP2,myP3]);                    // 1. Promise.all() : for checking all Promises at once
allPromises.then((value) => {                                       // Will not work if any error occured
    console.log(value);
});

let allPromise1 = Promise.allSettled([myP1,myP2,myP3]);             // 2. Promise.allSettled() : for removing clearing error for single Promise
allPromise1.then((value) => {
    console.log(value);
});

let promiseRace = Promise.race([myP1,myP2,myP3]);                   // 3. Promise.race() : Used for getting low-time Promise
promiseRace.then((value) => {                                       // Will not work if any error occured
    console.log(value);
})

let promiseAny = Promise.any([myP1,myP2,myP3]);                     // 4. Promise.any() : Used for getting low-time Promise without any error
promiseAny.then((value) => {
    console.log(value);
});

let promiseResolve = Promise.resolve("Promise resolved !");         // 5. Promise.resolve() : Returns the Promise and provides its resolved value
promiseResolve.then((value) => {
    console.log(value);
})

let promiseReject = Promise.reject(new Error("This is rejected promise error !"));
// 6. Promise.reject() : Returns the rejected error of the Promise with the value
promiseReject.then((value) => {
    console.log(value);    
},(error) => {
    console.log(error);
});