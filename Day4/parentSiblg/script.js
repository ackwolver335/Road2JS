/*  DOM Properties : 
    DOM collections are Read-only Collections
    These are Live elements
    Can be iterate using for of Loop
*/

// Getting $0 element if exist
// console.log($0);

// Getting its child Nodes
// console.log($0.childNodes);

// Getting the Parent Nodes
console.log(document.documentElement.parentNode);               // will provide document as parent Node
console.log(document.documentElement.parentElement);            // will provide null as there is no parent element

// Getting the secon div data
let bodyData = document.body.childNodes[1];
console.log(bodyData);

// Getting the second class of it
let secondClass = document.body.childNodes[3];
console.log(secondClass);