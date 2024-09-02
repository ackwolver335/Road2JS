// Promise Chaining
// Creating a Promise

// Main one : .then Calls()

let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Will be resolved after 3 seconds !");
        resolve(20);
    },3000);
});

// Using then or create Promise Chaining
p1.then((value) => {
    console.log("Promise Then Executed !" + value);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("This Promise is resolved !");
        },2000);
    })
},(error) => {
    console.log("Error Message : If any error Occures !\nError : " + error)             // for the Errors
}).then((value) => {
    console.log("Value returned by the First then Call ! " + value);
    return 23;
},(error) => {
    console.log("Error Message : If any error Occures !\nError : " + error)             // for the Errors
}).then((value) => {
    console.log("This is final call of Promise ! " + value);
},(error) => {
    console.log("Error Message : If any error Occures !\nError : " + error)             // for the Errors
});

// Quick Quiz : Recode the loadScript function with Promises() Concept
const loadScript = (src) => {

    return new Promise((resolve,reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        
        script.onload = () => {
            resolve("Script Loaded Successfully !");
        };

        script.onerror = () => {
            reject("Script rejected due to some unknown errors !");
        };
    });
};

// Using the loadScript Method here
let Promise1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
Promise1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("We are sorry but there is some error occurence here !\n" + error);
})