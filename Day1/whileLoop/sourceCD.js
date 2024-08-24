// While Loop and its varients
// 1. Simple While Loop

// Taking input
const prompt = require('prompt-sync')();
let num1 = Number.parseInt(prompt("Enter a number here : "));

let i = 0;
while(i < num1){
    console.log(i);
    i++;
}

// 2. Do-While Loop
let k = 2;
do{
    console.log(k);
    k++;
} while(k < num1);