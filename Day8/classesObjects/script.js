// Classes and Objects Concept in JS
// It is a kind of template that is been used again and again
class student{

    studentName;
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

// Creating Objects from the class or its template
let studentRavi = new student();
studentRavi.formfilled("Ack Wolver");                       // detailed passed as arguments
studentRavi.formCancelled("Ack Wolver");