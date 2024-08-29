let paraBlock = document.getElementsByTagName('div')[0];
paraBlock.innerHTML += "<h1> This is first Block Heading </h1>";

// Creating an element here
let divBlock = document.createElement('div');
divBlock.innerHTML = "<h2> This is some second Heading </h2>";
paraBlock.appendChild(divBlock);

// Similarly prepend is used for adding at the starting child of this block
/*
    before : used for adding before the element
    after : used for adding after the element
    replacewith : Used for replacing the block with particular element or create element
*/