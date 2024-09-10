/*
    Practice Set - Chapter 12

    Q1. WAP in JS to print the following after 2 second delay :
    Hello
    World

    Q2. WAP in JS to find the average of numbers in an array using spread syntax.
    Q3. WAP in JS which resolves a promise after n second. The function takes n as parameter.Use an IIFE to execute the function
    with different values of n.

    Q4. WAP in JS to find the simple interest calculator using JS.
*/

// Q1. Solution
let p1 = async (data) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(data);
        },2000);
    })
}

(async () => {                                          // IIFE
    let data1 = await p1("Hello");
    console.log(data1);
    data1 = await p1("World");
    console.log(data1);
})();

// Q2. Solution
function avg1(a,b,c,d,e){
    return (a + b + c + d + e) / 5;
}

let arr1 = [23,12,43,67,88];
console.log(`The Average of numbers available in the array : ${avg1(...arr1)}`);

// Q3. Solution
let p2 = async (data,n = 2) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(data);
        },1000 * n);
    })
}

(async () => {                                          // IIFE
    let data1 = await p2("I m going to print after 4 seconds !",4);
    console.log(data1);
    data1 = await p2("I m going to print after 2 seconds !",2);
    console.log(data1);
})();

// Q4. Solution
function simpleInterest(p,r,t){
    return (p * r * t) / 100;
}

console.log(`Simple Interest is : ${simpleInterest(1000,5,1)}`);