// Chapter 5 - Practice Set - Q1.
// Create an array of the number and take input from the user and add to the array
// creating an array here
let arr1 = [23,4,55,66,20,30];

const prompt = require('prompt-sync')();
console.log("Array before adding the number : " + arr1 + "\n");

let num1 = Number.parseInt(prompt("Enter a number here : "));
arr1.push(num1);

console.log("\nArray after adding the number : \n" + arr1);

// Chapter 5 - Practice Set - Q2.
// We can do the same thing with the while loop but it would be better to use the do-while loop
// As we need to use it at least once a time

console.log("\nArray before adding elements to it : " + arr1);

let num2;
do{
    num2 = Number.parseInt(prompt("Enter a number here : "));
    arr1.push(num2);
} while(num2 != 0);

console.log("\nArray after adding elements to it : " + arr1);

// Chapter 5 - Practice Set Q3.
// filter the number divisible by 10
let filtered_val = arr1.filter((value) => {
    return value%10 == 0
});

console.log("Array values divisible by 10 are : " + filtered_val);

// Chapter 5 - Practice Set Q4.
// Create an array of square of given numbers
let sqr_num = arr1.map((values) => {
    return values * values;
});

console.log("\nArray's values after calculating squares of it : " + sqr_num);

// Chapter 5 - Practice Set - Q5.
// Use reduce method to the array to find the factorial of the numbers
let arr2 = [1,2,3,4,5,6,7,8];

let factorial_num = arr2.reduce((val1,val2) => {
    return val1 * val2;
});

console.log("\nFactorial using the numbers avialable in the Array : " + factorial_num);