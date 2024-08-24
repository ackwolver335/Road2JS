// Chapter 3 - Practice Set - Q1.
// Print the marks of students using object and for loop

// for Taking input from the user
const prompt = require('prompt-sync')();

// Problem Set 1
const obj1 = {
    Akash : 34,
    Anjali : 45,
    Grover : 66,
    Stelon : 44
}

// Using for Loop

console.log("Printing the Values of Object using for Loop !");
for(let i = 0;i < Object.keys(obj1).length;i++){
    console.log("The Marks of " + Object.keys(obj1)[i] + " is : " + obj1[Object.keys(obj1)[i]]);
}

// Chapter 3 - Practice Set - Q2.
// Problem Set 2

console.log("\nPrinting the Value of the Object using for-in Loop !");
for(let key in obj1){
    console.log("The Marks of " + key + " is : " + obj1[key]);
}

// Chapter 3 - Practice Set - Q3.
// Problem Set 3

let correctNum = 23;
let count;

while(count != correctNum){
    count = Number.parseInt(prompt("Enter a number here : "));
    if(count != correctNum){
        console.log("Try Again ! You have entered wrong number !");
    } else {
        console.log("Nice One ! You have entered right number !");
        break;
    }
}

// Chapter 3 - Practice Set - Q4.
// Problem Set 4

function getAvg(a,b,c,d,e){
    return (a + b + c + d + e) / 5;
}

console.log("The Average of 5 numbers is : " + getAvg(1,2,3,4,5));