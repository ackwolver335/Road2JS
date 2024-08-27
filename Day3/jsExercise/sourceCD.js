// Exercise 1 Problem
// Generating a random number that will be secret
let num1 = Math.floor((Math.random() * 100) + 1);

// Guess Chances
let guess = 0;

// for taking input from the user
const prompt = require('prompt-sync')();
let user_data;

do{
    user_data = Number.parseInt(prompt("Guess the right number : "));
    if(user_data == num1){
        guess++;
        break;
    } else {
        guess++;
    }
} while(user_data != num1);

console.log(`You have guess the number in ${guess} guesses and the number is : ${num1}`);