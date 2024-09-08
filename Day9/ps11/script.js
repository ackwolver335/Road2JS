// Practice Set - Chapter 11
/*
    Q1. Create a JS Class to create a complex number, create a constructor to set the real and the complex Part.
    Q2. Write a method to add two complex number in the above class created.
    Q3. Create a class student from a class human and override the method and see changes
    Q4. Check if the student is an instance of human using instanceof keyword.
    Q5. Use getters and setters to get and set the real and imaginary part of the complex number.
*/

class Complex{

    // Q1. Ends here
    // creating constructor and taking two numbers first {real} and second {imaginary}
    constructor(real,imginary){
        this._real = real;
        this._imginary = imginary
    }

    // Q2. Starts and ends here only
    add_complex(values){
        this.real += values.real;
        this.imginary += values.imginary;
    }

    // Q5. Starts here : Setting up getters
    get real(){
        return this._real;
    }

    get imginary(){
        return this._imginary;
    }

    // Setting up setters
    set real(newReal){
        this._real = newReal;
    }

    set imginary(newImginary){
        this._imginary = newImginary;
    }
    // Q5. Ends here
}

let obj1 = new Complex(2,5);
let obj2 = new Complex(4,3);

// Using the add_complex() method here
obj1.add_complex(obj2);
console.log(`${obj1.real} + i${obj1.imginary}`);

// Q3. Starting from here
class human{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("Human class initiated !");
    }

    sing(){
        console.log("This ability provides the flute voice to humans !");
    }
}

class student extends human{
    sing(){
        console.log("This is student's class in which he is learning to sing a song !");
    }
}

let obj3 = new human("Ack",19);
let obj4 = new student("Abhay",19);

obj3.sing();                                // human class's method
obj4.sing();                                // student class's method Q3. ends here

// Q4. Starts and ends here only
console.log(`\nChecking if the student is an instance of human class ${student instanceof human}`);

// Getting values of real and imaginary part
console.log(`Object2 real part value : ${obj2._real} and imaginary part value : ${obj2._imginary}`);

// Setting up their values
obj2._real = 23;
obj2._imginary = 55;

console.log("\nAfter setting up new values to them !");
console.log(`Object2 real part value : ${obj2._real} and imaginary part value : ${obj2._imginary}`);