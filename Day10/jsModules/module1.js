// defining a function herel
export function greet(name){
    console.log(`Good Morning : ${name}`);
}

export function greetWithAge(age){
    console.log(`Your age is : ${age}`);
}

function sayHello(){
    console.log("Hello ! To the User !");
}

// used for exporting the modules
// these are some common js methods
module.exports = {greet,greetWithAge};

export default sayHello;