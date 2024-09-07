// Exercise 5 - HackerMan
// Q. Write a JS Program to pretend to look like a HackerMan which will simply display the following things :
/*
    Initializing Hack Program..
    Hacking PersonName Device....
    Username found username... 
    Connecting to Facebook..

    Try using html and CSS for styling !
*/

// Creating an Array containing message similar to this one !
let dataArray = [
    "Initiating hacking tools..",
    "Connecting Bug adder to Device..",
    "Connecting to Server1",
    "Connecting to your Facebook Account...",
    "Match not found....",
    "Reinitiating rules and restarting device..",
    "Match Found...",
    "Accessing Device details....."
]

// defining the waiting method sleep
const sleep = async (sec) => {

    // defining a promise to be returned in the awaiting state
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true);
        },sec * 1000);
    })

}

// Using async and await for getting the data one by one
const dataFunc = async (message) => {
    await sleep(2);
    console.log(message);
}

// Creating an IIFE (Immediately Invoked Function)
// (async () => {
//     for(let ele = 0;ele < dataArray.length;ele++){
//         await dataFunc(dataArray[ele]);
//     }
// });

const sync1 = async () => {
    for(let ele = 0;ele < dataArray.length;ele++){
        await dataFunc(dataArray[ele]);
    }
}

sync1();