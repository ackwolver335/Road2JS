/*
    More about Arrow function or method :

    Below we have different ways for calling the arrow functions.
*/device-width

// Case 1 :
// for single argument we can also skip the parenthesis
let sayGm = (name) => console.log(`Good Morning to ${name}`);

// Case 2 :
// But for multiple arguments we need to have the use of paranthesis, and curly brackets for function's body is also recommended !
let sayGe = (name,age) => { console.log(`Good Evening ${name} and your age is : ${age}`); }

// Case 3 : Using with Object
const obj1 = {
    name : "Ack",
    role : "Front-end Developer",
    age : 19,

    // Creating a method normally with function keyword
    showDetails : function(){

        // Storing data in a variable for getting the details shown
        let thisData = this;

        // getting details after some time
        setTimeout(function(){
            console.log(`The name of the employee is : ${this.name} and his role is : ${this.role}`);               // will print undefined
            console.log(`The name of the employee is : ${thisData.name} and his role is : ${thisData.role}`);       // will print values
        },2000);
    },

    // let's create an arrow method for resolving this keyword problem
    showValues : function(){
        setTimeout(() => {
            console.log(`The name of the employee is : ${this.name} and his role is : ${this.role}`);               // will print undefined
        },2000);
    }
}

obj1.showDetails();             // calling the methods