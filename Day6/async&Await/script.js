// Async and Await
// defining the async method/function

async function firstOne(){

    let delhiLib = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Rs.150");
        },2000);
    });

    let mumbaiLib = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Rs.250");
        },5000);
    });

    /*
        We can get or fetch the value using the code below

        delhiLib.then((value) => {
            alert(value);
        })

        mumbaiLib.then((value) => {
            alert(value);
        })

        Note : But the code above will run one by one and will not get wait for other and also the method will not stop at a particular
        point of code.
    */

    console.log("Delhi Library is fetching...");
    let delhiPrice = await delhiLib;
    console.log("Delhi Book Pricing : " + delhiPrice);

    console.log("Mumbai Library is fetching...");
    let mumbaiPrice = await mumbaiLib;
    console.log("Mumbai Book Pricing : " + mumbaiPrice);

    return [delhiPrice,mumbaiPrice];
};

// calling the method to get the fetched details
console.log("Welcome to National Library Data Center !");
let libData = firstOne();                                       // If there is another method then will be executed in parallel format

console.log(libData);

// defining another method for parallel execution explaination
const secondOne = () =>{
    console.log("This will be executed parallely aside of Book pricing system !");
};

secondOne();