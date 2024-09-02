// JS Promises : Promise of code to be executed and used in a way for parallel execution.
// Creating a new promise

let myPromise = new Promise(function(resolve,reject){
    alert("This is the alert of Promise !");
    resolve(20);
});

console.log(myPromise);

setTimeout(function(){
    console.log("Will be printed after some time !");
},3000);

// Consist of two more important things that are : 
// 1. state : Either get resolve or error.
// 2. result