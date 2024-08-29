alert("Initial Page Alert !");

// Set Time Out
let timer = setTimeout(function(){
    alert("This is after 3 seconds !");
},3000);

// Syntax for setTimeOut(function_name,delay_time,arguments,..);
// setInterval(function, delay,arguments of function)

/*
    The Difference between setInterval is that the interval will get into repetition after every delay
    time given in the argument while calling it.
    for stopping it clearInterval() method is used in the same way clearTimeOut() is used with it !
*/

// For clearing the timer
clearTimeout(timer);

console.log(timer);