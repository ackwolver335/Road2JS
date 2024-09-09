/*
    Destructuring and Spread Operator : 

    1. Destructuring is used to unpack values from an array or variables
    // ...rest for getting rest of the values in name rest of the array.

    2. Spread Syntax : It allows an array or string to be expanded in places, where Zero or more arguments are expected.
*/

let arr1 = [34,45,89,55,66];
let [a1,a2,, ...rest]  = arr1;            // On the place of single assignment of values using indexes of the array
console.log(a1,a2,rest);

let {a,b} = {a: 2,b : 45};
console.log(a,b);

let arr2 = [23,34,22];
const obj1 = {...arr2};                 // Spread Syntax
console.log(obj1);

// Creating a method to use spread syntax for getting the product of the numbers
function product1(val1,val2,val3){
    return val1 * val2 * val3;
}

console.log(product1(...arr2));         // Spread Syntax

// Converting the value of an object at runtime of the format
let obj2 = {
    name : "Vormer",
    age : 23
}

console.log({...obj2,age : 44});        // Spread Syntax
console.log({age : 44,...obj2});        // It would not take any further effect on the code output