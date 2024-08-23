const { get } = require("http");

// Simple Code to add prompt
console.log("Hello World !");

// Adding method for getting product
function getProduct(a,b,c){
  return (a * b * c);
}

// Using the method created
let product = getProduct(12,4,3);
console.log(product);