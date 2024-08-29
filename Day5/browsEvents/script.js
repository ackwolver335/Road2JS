// Creating a function with mouse event
let block1 = document.getElementsByClassName('container')[0];

block1.onclick = () => {
    console.log("Block 1 Clicked here !");
}

let paraBlock = document.getElementsByTagName('p')[0];

paraBlock.onclick = () => {
    paraBlock.innerText += "Para Block Clicked !";
    console.log("Para Block Clicked !");
}

// On adding a handler from JS that is already in HTML will overridden in JS that of available in HTML