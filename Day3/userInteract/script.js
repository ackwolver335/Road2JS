// alert() : A method used for showing min-window for alert window box
alert("This is an alert Message !");

// prompt() : A method used for taking input from the user from the alert box
// Also we can give the default value to it
let num = Number.parseInt(prompt("Enter a number here : ","90"));
document.write(num);

// Converting that particular one to alert box
alert("You have entered : " + (typeof num));

// confirm() : It is used for taking a Boolean value as true or false being a pop-up to the Page
let choice = confirm("Can I add the value to the Page ?");
if(choice){
    document.write(num);
    alert("The data or value is been added to the Page !");
} else {
    alert("Allow me to add value to the Page !");
}