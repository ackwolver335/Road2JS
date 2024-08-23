// Operators in JS
console.log("Operators in JS");

let a = 12;                             // Variables
let b = 6;

// Arithmetic Operators
console.log("a + b " + (a + b));
console.log("a - b " + (a - b));
console.log("a / b " + (a / b));
console.log("a * b " + (a * b));
console.log("a ** b " + (a ** b));
console.log("a % b " + (a % b));

// Unary Operator
console.log("++a = " + (++a));
console.log("a++ = " + (a++));
console.log("--a = " + (--a));
console.log("a-- = " + (a--));

// Assignments Operators
let a1 = 8;
console.log("Initial Value of a1 is : " + a1);

a1 += 10;              // Assignment Addition
console.log("Assignment Addition = " + a1);

a1 -= 10;              // Assignment Subtraction
console.log("Assignment Subtraction = " + a1);

a1 *= 4;               // Assignment Multiplication
console.log("Assignment Multiplication = " + a1);

a1 /= 2;               // Assignment Division
console.log("Assignment Division = " + a1);

a1 %= 3;              // Assignment Modulus
console.log("Assignment Modulus = " + a1);

// Comparsion Operators
let comp1 = "Ack";
let comp2 = 6;

console.log("Comparing comp1 == comp2 is : " + (comp1 == comp2));
console.log("Comparing comp1 != comp2 is : " + (comp1 != comp2));
console.log("Comparing comp1 == comp2 is : " + (comp1 === comp2));
console.log("Comparing comp1 !== comp2 is : " + (comp1 !== comp2));

// Logical Operators
let first1 = 23;
let second1 = 45;

// Using Logical && Operator
console.log(first1 < second1 && first1 != second1);

// Using Logical || Operator
console.log(first1 < second1 || first1 != second1);

// Using Logical ! Operator
console.log(!true);