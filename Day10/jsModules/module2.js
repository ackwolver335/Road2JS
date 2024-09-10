// Using ES6 methods for importing the modules
import sayhello,{greet,greetWithAge} from './module1.js';

// Starting with common js methods
const func1 = require("./module1");

// Checking the typeof func1 for getting its details
console.log(`The Type of func1 is : ${typeof func1}`);

// Calling the methods
func1.greet("ack wolver");

// // Calling another age function
func1.greetWithAge(23);

/*
    Another way of doing the same thing is : 
    const {func1,func2} = require("module_name");
    
    // Calling the first method : 
    func1()

    // Calling the second method :
    func2()
*/

greet("Ack Wolver");
greetWithAge(19);

// time to use the default defined method
sayhello();