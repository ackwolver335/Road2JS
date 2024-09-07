// Constructors in JS
// Together by creating the classes and Objects
class student{

    studentName;

    // A Class can only be have a single constructor
    // If we don't have create any constructor a default constructor is been created by JS
    // parameterized constructor
    constructor(first,second){
        console.log(`${first} and ${second} are the values that are passed in parameterized constructor !`);
    }

    formfilled(userName){
        // using this keyword for class members/variables
        this.studentName = userName;
        console.log("Form Completed : " + this.studentName);
    }

    formCancelled(userName){
        this.studentName = userName;
        console.log("Form is still incompleted : " + this.studentName);
    }
}

// Creating an Object for it
let studentRavi = new student("startingName","endingName");
let studentVijay = new student("firstValue","secondValue");