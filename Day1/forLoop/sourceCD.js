// Creating a Basic For Loop
// 1. Simple For Loop
const prompt = require('prompt-sync')();

let num1 =  Number.parseInt(prompt("Enter a number less than 20 : "));
let sum1 = 0;

for(let a = 0;a <= num1;a++){
    sum1 += a;
    console.log("Sum of of numbers till now is : " + sum1);
}

// 2. For in Loop
// Creating an object for getting its key:value pair
const obj1 = {
    Name : "Ack",
    age : 19,
    Subject : "BCA",
    Skill : "Programmer"
}

// Getting keys and value using for in Loop
for(let b in obj1){
    console.log("Key name " + b + " with its value : " + obj1[b]);
}

// 3. For of Loop
let myName = "Ack Wolver";
console.log("Each letter of the String " + myName + " is shown below !");
for(let c of myName){
    console.log(c);
}