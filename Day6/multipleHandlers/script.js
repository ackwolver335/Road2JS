// Attaching Multiple Handlers to Single Promise
// Creating a Promise here

let firstPromise = new Promise((resolve,reject) => {
    console.log("Initially not resolved !");

    setTimeout(() => {
        resolve(1);
    },2000);
})

// Below one will run first
firstPromise.then((value) => {                               //  Single Handler
    console.log("Now it is been resolved !");
    console.log(value);

    // for not getting confused using the Promise Chaining
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("The Promise Chaining resolved !");
        },3000);
    })
}).then((value) => {
    console.log(value);
})

// this will run after the first one
firstPromise.then(() => {
    console.log("Second Handler Launched !");
})