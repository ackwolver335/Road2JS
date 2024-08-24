// Functions
// Need and requirements of the function
let a = 23;
let b = 55;

// We need to add these numbers
console.log("The sum of these numbers is : " + (a + b));
console.log("The sum of these numbers is : " + (a + 10));
console.log("The sum of these numbers is : " + (20 + b));

// But what would be used when we need to do this more than 20 to 30 times
// We create a function here using function keyword
function addTwo(first,second){
    return first + second
};

console.log("The Sum of two numbers is : " + (addTwo(23,44)));

// Another way to create function is using => symbol to which we call as arrow functions
let getTwo = (first,second) => {
    return first + second
};

// Will do the same thing and is recommended in Modern JS
console.log(getTwo(33,33));