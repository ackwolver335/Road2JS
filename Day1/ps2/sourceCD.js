// Chapter 2 - Practice Set - Q1.
// code for prompt
const prompt = require('prompt-sync')();

// Taking the input from the user
let userAge = Number.parseInt(prompt("Enter your age here : "));
if(userAge > 10 && userAge < 20){
    console.log("Age lies between 10 and 20 !");
}

else if(userAge < 10){
    console.log("User Age is less than 10 !");
}

else{
    console.log("User's age is greater than 20 !");
}

// Chapter 2 - Practice Set - Q2.
let num1 = Number.parseInt(prompt("Enter a number b/w 0 and 10 : "));

switch(num1){
    case 0:
    case 2:
    case 4:
    case 6:
    case 8:
        console.log("You have entered an even number !");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log("You have entered an odd number !");
        break;
    default:
        console.log("Number given is out of context !");
}

// Chapter 2 - Practice Set - Q3.
let num2 = Number.parseInt(prompt("Enter a (+ve) number less than 100 : "));

if(num2%2 == 0 && num2%3 == 0){
    console.log("Given number " + num2 + " is divisible by both 2 and 3 !");
}

else{
    console.log("Given number " + num2 + " is not divisible by 2 and 3 !");
}

// Chapter 2 - Practice Set - Q4.
if(num2%2 == 0 || num2%3 == 0){
    if(num2%2 == 0 && num2%3 != 0){
        console.log("Number is only divisible by 2 !");
    }
    
    else if(num2%3 == 0 && num2%2 != 0){
        console.log("Number is only divisible by 3 !");
    }
    
    else{
        console.log("Number is divisible by both !");
    }
}

else{
    console.log("Number is not divisible by 2 and 3 !");
}

// Chapter 2 - Practice Set - Q5.
console.log("Your can : " + (userAge > 18 ? "drive !" : "not drive !"));