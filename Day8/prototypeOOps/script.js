// Prototyping and Inheritance
// Creating an object regarding this
let obj1 = {
    "first" : 34,
    "second" : "New1",
    set2 : () => {
        alert("First alerted !");
    }
};

console.log(obj1);

let obj2 = {
    "set1" : 34,
    set2 : () => {
        alert("Value alerted !");
    }
}

obj1.__proto__ = obj2;
obj1.set2();

// We can also create further more prototype of a particular object that is been used as a prototype
// before in the code