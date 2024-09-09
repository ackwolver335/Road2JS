/*
    Scope in JS : 

    1. Block Scope
    2. Function Scope
    3. Global Scope

    const and let keyword provides block level of Scope to the variable which are created using these
    keywords in order to store the data.
*/

// defining a variable and checking its scope
// Global level of its scopegt 
let num1 = 56;

{
    // Inside a particular block
    console.log(num1);
    let num2 = 44;                          // cause let keyword has block level scope
    var num3 = 34;
}

// Using it outside the block of its scope
console.log(num3);                          // cause var has global level of scope
// console.log(num2);                       // will not be available outside it

// Checking the same scope at function level
function check_even(num){
    if(num%2 == 0){
        return true;
    } else {
        return false;
    }

    const PI = 3.14;                        // can't be accessed outside the function or method
}

// trying to access PI Outside function code block
console.log(`Checking if the number is even or not : ${check_even(4)}`);
// console.log(PI);                         // will not run due to function level of its scope