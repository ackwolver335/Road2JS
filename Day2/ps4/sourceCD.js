// Chapter 4 - Practice Set - Q1.
// Output of "var\"".length
console.log("var\"".length);

// Chapter 4 - Practice Set - Q2.
// Show or Explore the use of include(), startsWith() and endsWith()
// Q2. a) using includes()
let sentence = "This is a new sentence here !";
console.log("Initial Sentence : " + sentence);

// Applying Method
console.log("Checking if the code contains 'here' word using include() method : " + sentence.includes('here'));

// Q2. b) startsWith() method
console.log("Checking if the string contains 'This' in start : " + sentence.startsWith("This"));

// Q3. c) endsWith() method
console.log("Checking if there  is '.' at the end of the sentence : " + sentence.endsWith("."));

// Chapter 4 - Practice Set - Q3.
// Convert the given string into lowercase
const prompt = require('prompt-sync')();

// Taking input from the user
let str1 = prompt("Enter a string to convert into uppercase : ");
console.log("Initial String : " + str1);
console.log(`String in lowerCase : ${str1.toLowerCase()}`);

// Chapter 4 - Practice Set - Q4.
// Extract particular amount of String part from the current available string
let str2 = "Please give Rs.1000";
let partition = Number.parseInt(str2.slice("Please give Rs.".length));
console.log("Retreived amount : " + partition);
console.log(typeof partition);

// Chapter 5 - Practice Set - Q5.
// Try to change the 4rth character of the string, will you able to do it
console.log("Initial String : " + str2);

// Trying to change the 4rth character
str2[3] = "R";
console.log(str2);

// We're not able to do it as the Strings are Immutable