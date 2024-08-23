// Data Types
// nn bb ss u
let a = null;
let b = 23;
let c = false;        // Can also store true value {Boolean}

let d  = BigInt("3454");
let string1 = "this is a string";
let symb1 = Symbol("This is a symbol");
let un1 = undefined;

console.log(a,b,c,d,string1,symb1,un1);
console.log(typeof d);

// Non-Primitive Data Types
// Creating Objects in JS
const obj1 = {
  "new1" : false,
  "new2" : 23,
  "third" : undefined
};

console.log(obj1.new2);
console.log(obj1.third);

// Another Way
console.log(obj1["new1"]);