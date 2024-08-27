// Chapter 6 - Practice Set Q1.
// Take input from the user as value his/her age and tell him/her that he/she could drive or not
let age = Number.parseInt(prompt("Enter your age : "));

if((age >= 18 ? true : false)){
    alert("Yes, You can drive !");
} else {
    alert("No, you can't drive !");
}

// Chapter 6 - Practice Set Q2.
// To ask the user to be asked again for the same question of prompt
let choice = confirm("If you want to be asked again ?");
if(choice){
    let age = Number.parseInt(prompt("Enter your age : "));

    if((age >= 18 ? true : false)){
        alert("Yes, You can drive !");
    } else if(age < 0){
        // Practice Set - Q3.
        console.error("Please enter a proper/valid age !");
    }
    if(age > 4){
        // Practice Set - Q4.
        location.href = "https://google.com";
    }
    else {
        alert("No, you can't drive !");
    }
}

// We can also do it multiple times by using while loop on the place of if statement

// Chapter 6 - Practice Set Q5.
// Change the color of the page as per given by the user using prompt
let user_color = prompt("Enter a color you want to change of body : ");
document.body.style.background = user_color;