// Getting the body here
let body1 = document.body;

// Getting the first child of the body
console.log("The First Child of the body is : " + body1.firstChild);

// Getting the element only navigation here
console.log("The First Element child of the body is : " + body1.firstElementChild);

/*
    document.nextElementSibling : Used for pointing to the next element in the sibling.
    document.firstElementChild : Used for pointing to the first child of the element.
    document.lastElementChild : Used for pointing to the last child of the element.
*/

// defining a method for changing the background color or other properties for the change
const changeBgColor = () => {
    document.body.firstElementChild.style.background = "red";
};