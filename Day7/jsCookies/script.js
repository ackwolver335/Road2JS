// Cookies in JS
console.log(document.cookie);

// adding a cookie now
// Here document.cookie is a set call used for setting up the cookie
document.cookie = "firstOne=this2343";
document.cookie = "first=this23";
document.cookie = "firstOne=this2300";

// taking some input from the user
let cookieName = prompt("Enter the name of the cookie : ");
let valueName = prompt("Enter the value of the cookie : ");

document.cookie = `${cookieName}=${valueName}`;

// for encoding regarding special characters of the cookies
// And this can be easily encoded with the help of decodeURIComponent() method
document.cookie = `${encodeURIComponent(cookieName)}=${encodeURIComponent(valueName)}`;

console.log(document.cookie);