// Error Object in JS
// creating an error here

let salary = Number.parseInt(prompt("Enter your salary here : "));
if(salary < 10000 && salary > 200000){
    throw new ReferenceError("The Variable is not been defined !");
}

try{
    
    console.log(myName);

} catch(error){

    // Getting Error Name Specifically
    console.log(error.name);

    // Getting Error Message Specifically
    console.log(error.message);

    // Specifying Error with stack
    // console.log(error.stack);
}