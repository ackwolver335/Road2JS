const prompt = require('prompt-sync')();

let name1 = prompt("Enter some value here : ");
console.log("Data type of name1 is : " + (typeof name1));

// Converting this string number into Numerical data type
name1 = Number.parseInt(name1);
console.log("Data Type of name1 after conversion into an integer : " + (typeof name1));

// Alert will not work as it is a window object and running in browser window mainly
// alert("This is an alert ?");

// Getting age and applying conditional statements
let myAge = prompt("Ente your age here : ");
if(myAge > 0){
  console.log("You have a proper living life !");
} else{
  console.log("Your are not a human with valid age !");
}

// Ternary Operator
console.log("You're age is : " + (myAge > 18 ? "above 18 years !" : "below 18 years !"));

// Homework Statement - Switch Statement
let fruit = "Mango";

switch(fruit){
    case "Mango":
        console.log("Fruit Choosen is Mango !");
        break;

    case "Grapes":
        console.log("Fruit Choose is Grapes !");
        break;

    case "Banana":
        console.log("Fruit Choosen is Banana !");
        break;

    default:
        console.log("No Fruit Choose !");
        break;
}