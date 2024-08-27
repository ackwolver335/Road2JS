// Using console here
console.log("Hello Ack Wolver !");

// Using console error() method : Used for showing user-defined error
console.error("This is a kind of error !");

// Using assert() method : It is used in order to showing assertion regarding a particular condition
console.assert(5>10);

// Using clear() method : It is used for clearing the overall console window to be cleared
// console.clear();

// Using table() : It is used for showing the key:value form of data in tabular format
// creating an object first
let obj1 = {
    first : 12,
    second : 45,
    third : "Ack"
};

console.table(obj1);

// Trying the same method with an array
let arr1 = [12,34,45];
console.table(arr1);

// Using warn() : It is used for showing some warning message in the console window
console.warn("This is a warning from the side of Console !");

// Using info() : It is used for showing the information regarding the one which is passed
// Although it works similar to the log() method of the console Object
console.info(arr1);

// Using time() : It is used for starting a particular time interval with a label for checking initiation time
// Using timeEnd() : It is used for ending the time slot with the same time interval starting by time() method

// Checking the time taken by a while loop for printing two numbers
console.time("While Loop Started !");

let num = 0;
while(num != 5){
    console.log("Number value is : " + num);
    num++;
};

console.log("\nTime taken by while Loop to print 5 numbers is : " + (console.timeEnd("While Loop Started !")));