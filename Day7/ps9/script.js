// Chapter 9 - Practice Set
// Q1. Program to load a script in browser using Promises, use .then() to display an alert when the load is completed.

let loadScript = (src) => {
    return new Promise((resolve,reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(src);
        }
        
        document.body.append(script);
    });
};

let anotherMain = () => {
    // By the video
    let script1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    console.log(script1);

    // We can also use getMilliseconds() methods for getting the exact timing of loading the script including date() method in js
}

anotherMain();

// By the Question
let script2 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
script2.then((value) => {
    alert(value);
})


// Q2. Program with the same previous question with the use of async and await
let loadScript1 = (src) => {
    return new Promise((resolve,reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(src);
        }
        
        document.body.append(script);
    });
};

let anotherMain1 = async () => {
    // By the video
    let script1 = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    console.log(script1);

    // We can also use getMilliseconds() methods for getting the exact timing of loading the script including date() method in js
}

anotherMain();

// By the Question
let script1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
script1.then((value) => {
    alert(value);
})

// Q3. Program to create a Promise to be rejected after 3 seconds, use async and await to get its value,
// also to use try and catch for handling the errors
let method1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error("This promise is been rejected !"));
        },3000);
    })
}

let method2 = async () => {
    try{
        let firstOne = await method1();
        console.log(firstOne);
    } catch(err){
        console.log("The Error is been handled !");
    }
}

method2();

// Q4. Program using Promise.all() inside async and await of total 3 Promises, 
// Compare its result with the case where we await the promises one by one.

let prom1 = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("First Promise Rejected !");
        },2000);
    });
};

let prom2 = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Second Promise Rejected !");
        },1000);

    });
};

let prom3 = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Third Promise Rejected !");
        },3000);
    });
};

let finalPromise = async () => {
    
    // for checking how much time is been taken
    console.time("Promise Run");

    // Wrong way of awaiting for the solution or Promises
    // let firstProm = await prom1();
    // let secondProm = await prom2();
    // let thirdProm = await prom3();

    let firstProm = prom1();
    let secondProm = prom2();
    let thirdProm = prom3();

    let finalProm = await Promise.all([firstProm,secondProm,thirdProm]);
    console.log(finalProm);
    console.timeEnd("Promise Run");

};

finalPromise();