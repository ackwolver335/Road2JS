/*
    Hoisting in JS : It is the process in which the interpreter appears to move the declaration to the 
    top of the code before its execution.

    JS helps that if the function or variable is been defined after its calling, then also the function
    will get called if defined, and the variable can be used if defined afterwards only by using var 
    keyword.

    Also if the variable is initialised with some value, then also it will remain show us that the
    data is undefined, cause the value is been initialised before its declaration.

    Note : Function's expressions and class's expressions are not hoisted.
*/

// let's have an example with the help of function
console.log(`Value of the variable before its declaration : ${a}`);
greet();
// sum();                                   // can't be used before its initialization due to function expression

function greet(){
    console.log("Good Morning !");
}

var a = 10;                                 // here the variable is been used before its declaration
console.log(`Value of the variable after its declaration : ${a}`);

// Only using let on the place of var
try{
    console.log(b);
    let b = 3;
} catch(e){
    console.log("Error regarding use of let on the place of var before its initialization : " + e);
}

let sum = function done(){
    console.log("Sum method to calculate the sum !");
}