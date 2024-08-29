// Adding and Removing Events Listeners
let btn1 = document.getElementsByClassName('button')[0];

console.log(btn1);

let firstOne = function(event){
    console.log(event);
    console.log(event.timeStamp);
};

let secondOne = function(event){
    alert("This is second event Listener !");
};

btn1.addEventListener('click',firstOne);
// btn1.addEventListener('click',secondOne);

/*

    Syntax of Event Listeners :
    1. element.addEventListener('event','handler');
    2. element.removeEventListener('event','handler');

*/

// let userInput = Number.parseInt(prompt("Enter a number here : "));
// if(userInput == 2){
//     btn1.removeEventListener('click',firstOne);
// }