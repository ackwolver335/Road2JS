/*
    Closure set in JS : It is simply a method simply with its lexical environment. And here the lexical
    enviroment is binded together with it.
*/

message = "I m a good boy !";

function greetMe(){

    // It is generally considered as a Closure
    // Function along with its lexical environment

    let message = "I m greeting someone !";
    console.log(`Message 1 : ${message}`);

    {
        let message = "I m not greeting someone !";
        console.log(`Message 2 : ${message}`);
    }

    let func1 = function greetAll(){
        // function or method with its lexical environment
        console.log(`Message 3 : ${message}`);
    }

    return func1;
}

let returned_data = greetMe();
returned_data();