// Promises useful methods
// 1. .then()
// 2. .catch()

// Creating a promise here
let myPromise = new Promise((resolve,reject) => {
    // Technically we don't use console.log() here for printing we uses them in .then() and .catch() methods
    // console.log("Promise is in pending state !\nInitially !\n")
    
    // Creating a method here
    setTimeout(()=> {
        // console.log("This particular promise is been rejected !");
        reject(new Error('This is an error on rejection of Promise !'));        // Will provide an error on getting rejected
    },3000);
});

let myPromise1 = new Promise((resolve,reject) => {
    // Technically we don't use console.log() here for printing we uses them in .then() and .catch() methods
    // console.log("Promise is in pending state !\nInitially !\n")
    
    // Creating a method here
    setTimeout(()=> {
        // console.log("This particular promise is been fullfilled !");
        resolve(true);                                                          // Will provide a value on getting resolved
    },3000);
});

console.log(myPromise,myPromise1);                                              // getting its pending state

// Providing the code to be executed when the promises is been completely run
// In order to get the value
myPromise1.then((value) => {
    console.log(value);
},(error) => {
    console.log(error);                 // In order to handle the error
});

// Catching the error of the second Promise
// In order to catch the error or get the error
myPromise.catch((error) => {
    console.log("There is some error in the first Promise !");
});