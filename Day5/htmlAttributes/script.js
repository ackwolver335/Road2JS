// getting the class of the first element
let data = second.getAttribute('class');                // Not recommeded directly by ID Name
console.log(data);

console.log("Checking if the style attribute is been set in the div : " + (second.hasAttribute("class") ? true : false));

// Setting an attribute
let paraBlock = document.getElementsByClassName("container")[0].firstElementChild;
paraBlock.setAttribute('style',"color:red;");

// Removing an Attribute
let containBlock = document.getElementsByClassName("container")[0];
containBlock.removeAttribute("style");

// Getting the instance of all available attributes
let allAttributes = Array.from(containBlock.attributes);
console.log(allAttributes);

// Creating our Custom Attributes
console.log(paraBlock.dataset);
console.log(paraBlock.dataset.mine);