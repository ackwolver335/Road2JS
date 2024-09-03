// Error Handling in JS
// Putting some code to be executed manually

setTimeout(() => {
    console.log("Retrieving Data Manually........");
},1000);

// console.log(data);
// for not stopping this particular script
try{
    console.log(data);

    // If we could try using asynchronous code but the error wouldn't be handled
} catch(error){
    console.log(error);
}

// Now code after this will be executed

setTimeout(() => {
    console.log("Fetching Drivers........");
},3000);